import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import movieData from '../MovieData/movie-data.json';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const MovieGrid = () => {
    const [showMovieDetails, setShowMovieDetails] = useState(movieData);
    const [pageNumber, setPageNumber] = useState(1)
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(0),
                fontSize: '20px',
                backgroundColor: 'white',
                padding:'5px'
            },
        },
    }));
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value)
        setCurrentPage(value)
    };
    const handleMovieClick = (details) => {
        history.push(`/movie-details/${((details.Title).split(' ').join('-'))}`)
    }
    const [posts, setPosts] = useState(movieData);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(24);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className = "hero common-hero">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-12">
                            <div className = "hero-ct">
                                <h1> movie listing - grid</h1>
                                <ul className = "breadcumb">
                                    <li className = "active"><Link to='/'>Home > </Link></li>
                                    <li>movie listing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-single">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="topbar-filter">
                                <p>Found <span>{showMovieDetails.length} movies</span> in total</p>
                            </div>
                            <div className="flex-wrap-movielist">
                                {currentPosts.map(x =>
                                    <div className="movie-item-style-2 movie-item-style-1">
                                        <img src={x.Poster} alt="" />
                                        <div className="hvr-inner">
                                            <Link onClick={() => handleMovieClick(x)}> Read more <i className="ion-android-arrow-dropright"></i> </Link>
                                        </div>
                                        <div className="mv-item-infor">
                                            <h6><a href="#">{x.Title}</a></h6>
                                            <p className="rate"><i className="ion-android-star"></i><span>{x.Ratings[0].Value}</span></p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="topbar-filter">
                                <span className='text-white' style={{fontSize:'15px'}}>Page {page} of 381:</span>
                                <div className={classes.root}>
                                    <Pagination count={381} page={page} onChange={handleChange} color='primary' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieGrid;