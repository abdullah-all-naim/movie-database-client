import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const FavouriteMovies = ({user}) => {
    const history = useHistory()
    const [showFavList, setShowFavList] = useState([])
    useEffect(() => {
        fetch('https://secure-mountain-78898.herokuapp.com/getfavlist?username' + user)
            .then(res => res.json())
            .then(data => setShowFavList(data))

    }, [])
    const movieClick = (detail) => {
        history.push(`/movie-details/${((detail.title).split(' ').join('-'))}`)
    }
    return (
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="topbar-filter user">
                <p>Found <span>{showFavList.length}</span> in total</p>
            </div>
            <div class="flex-wrap-movielist grid-fav">
                {
                    showFavList.length===0 && <h1>loading...</h1> 
                }
                {
                    showFavList.map(x =>
                        <div class="movie-item-style-2 movie-item-style-1 style-3">
                            <img src={x.image} alt="" />
                            <div className="hvr-inner">
                                <Link onClick={() => movieClick(x)}> Read more <i className="ion-android-arrow-dropright"></i> </Link>
                            </div>
                            <div class="mv-item-infor">
                                <h6><a href="moviesingle.html">{x.title}</a></h6>
                                <p class="rate"><i class="ion-android-star"></i><span>{x.rating}</span></p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default FavouriteMovies;