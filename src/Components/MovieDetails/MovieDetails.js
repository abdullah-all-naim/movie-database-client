import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import movieData from '../MovieData/movie-data.json';
import FullWidthTab from '../FullWidthTab/FullWidthTab';
import { Link } from 'react-scroll';
import { UserContext } from '../../App';
import { faShareAlt, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const [star, setStar] = useState(0)
    let { Title } = useParams();
    const movieTitle = Title.split('-').join(' ')
    let movieHeading = '';
    for (let i = 0; i < movieData.length; i++) {
        if (movieTitle === movieData[i].Title) {
            console.log('hi')
            movieHeading = movieData[i]
        }
    }

    const handleFavourite = (fav) => {
        if (sessionStorage.getItem('isLoggedIn')) {
            const favDetail = {
                title: fav.Title,
                rating: fav.imdbRating,
                image: fav.Poster,
                user: JSON.parse(sessionStorage.getItem('isLoggedIn')).name
            }
            document.getElementById('add-to-fav').textContent = 'Added to Favorites'
            console.log(favDetail)
            fetch('https://secure-mountain-78898.herokuapp.com/favoritelist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(favDetail)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
        else {
            history.push('/login')
        }
    }
    const handleStarClick = (e) => {
        e.target.style.color = 'gold'
        if(star<10){
            setStar(star + 1)
        }
    }
    return (
        <>
            <div>
                <div className="hero mv-single-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/* <h1> movie listing - list</h1> */}
                                {/* <ul className = "breadcumb">
                                <li className = "active"><Link to='/'>Home</Link></li>
                                <li> <span className = "ion-ios-arrow-right"></span> movie listing</li>
                            </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-single movie-single movie_single">
                    <div className="container">
                        <div className="row ipad-width2">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="movie-img sticky-sb">
                                    <img src={movieHeading.Poster} alt="" />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <div className="movie-single-ct main-content">
                                    <h1 className="bd-hd">{movieHeading.Title} <span> {movieHeading.Year}</span></h1>
                                    <div className="social-btn">
                                        <Link className="parent-btn" id='add-to-fav' style={{ cursor: 'pointer' }} onClick={() => handleFavourite(movieHeading)}><FontAwesomeIcon className='mr-2' icon={faHeart} /> Add to Favorite</Link>
                                        <div className="hover-bnt">
                                            <a className="parent-btn" style={{ cursor: 'pointer' }}><FontAwesomeIcon className='mr-2' icon={faShareAlt} />share</a>
                                            <div className="hvr-item">
                                                <a className="hvr-grow"><FontAwesomeIcon className='mr-2 text-dark' icon={faFacebook} /></a>
                                                <a className="hvr-grow"><FontAwesomeIcon className='mr-2 text-dark' icon={faTwitter} /></a>
                                                <a className="hvr-grow"><FontAwesomeIcon className='mr-2 text-dark' icon={faYoutube} /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="movie-rate">
                                        <div className="rate">
                                            <p className="rate"><FontAwesomeIcon className='mr-2' style={{ color: 'gold' }} icon={faStar} /> <span> {movieHeading.Ratings[0].Value}</span></p>
                                        </div>
                                        <div className="rate-star">
                                            <p>Rate This Movie: {star}  </p>
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                            <FontAwesomeIcon className='mr-2 star-icon' onClick={handleStarClick} icon={faStar} />
                                        </div>
                                    </div>
                                    <div className="movie-tabs">
                                        <div className="tabs">
                                            <FullWidthTab movieHeading={movieHeading}></FullWidthTab>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;