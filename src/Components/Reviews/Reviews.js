import React, { useEffect, useState } from 'react';
import ReviewWriting from '../ReviewWriting/ReviewWriting';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ShowAvatar from '../Avatar/Avatar';

const Reviews = ({ movieHeading }) => {
    const [getReviewData, setGetReviewData] = useState([]);
    useEffect(() => {
        fetch('https://secure-mountain-78898.herokuapp.com/getreviewdata?title=' + movieHeading.Title)
            .then(res => res.json())
            .then(data => {
                setGetReviewData(data)
            })
    }, [])

    return (
        <div className="">
            <div className="topbar-filter d-flex justify-content-around">
                <p>Total Reviews : Found <span>{getReviewData.length}</span> in total</p>
                <ReviewWriting movieHeading={movieHeading}></ReviewWriting>
            </div>
            <div>
                {
                    getReviewData.length === 0 && <h2>No reviews Found</h2>
                }
            </div>
            {
                getReviewData.map(x =>
                    <div class="mv-user-review-item userrate pt-4">
                        <div class="user-infor d-flex">
                            <div style={{width: '50px', height: '50px'}}>
                            <ShowAvatar></ShowAvatar>
                            </div>
                            <div className='ml-4'>
                                <h3>{x.name}</h3>
                                <div className='d-flex'>
                                    <p><FontAwesomeIcon className='mr-2' style={{ color: 'gold' }} icon={faStar} /> {x.reviewRating}/10 rated by: </p>
                                    <p className='ml-2'>
                                        <a> {x.username}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p>{x.description}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Reviews;