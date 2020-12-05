import React, { useEffect, useState } from 'react';

const RatedMovies = ({ user }) => {
    const [getRatedData, setGetRatedData] = useState([]);
    useEffect(() => {
        fetch('https://secure-mountain-78898.herokuapp.com/getrateddata?username=' + user)
            .then(res => res.json())
            .then(data => {
                setGetRatedData(data)
            })
    }, [])
    return (
                <div class="d-flex flex-wrap">
                    <div class="col-md-9 col-sm-12 col-xs-12">
                        <div class="topbar-filter">
                            <p>Found <span>{getRatedData.length}</span> in total</p>
                        </div>
                        {
                            getRatedData.length === 0 && <h2>Loading...</h2>
                        }
                        {
                            getRatedData.map(data =>
                                <div class="movie-item-style-2 userrate">
                                    <img src={data.image} alt="" />
                                    <div class="mv-item-infor ml-4">
                                        <h6><a >{data.title} <span>(2012)</span></a></h6>
                                        <p class="time sm-text mb-3">your rate:</p>
                                        <p class="rate"><i class="ion-android-star"></i><span>{data.reviewRating}</span> /10</p>
                                        <p class="time sm-text mb-3">your reviews:</p>
                                        <h6>{data.name}</h6>
                                        <p>“{data.description}”</p>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
    );
};

export default RatedMovies;