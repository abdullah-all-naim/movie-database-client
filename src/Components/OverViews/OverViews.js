import React from 'react';
import ShowAvatar from '../Avatar/Avatar';

const OverViews = ({ movieHeading }) => {
    const actorsArray = movieHeading.Actors.split(',')
    return (
        <div id="overview" className="tab active">
            <div className="row">
                <div className="col-md-8 col-sm-12 col-xs-12">
                    <h3>{movieHeading.Plot}</h3>
                    <div className="mvsingle-item ov-item">
                        <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src="images/uploads/image1.jpg" alt="" /></a>
                        <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image21.jpg" ><img src="images/uploads/image2.jpg" alt="" /></a>
                        <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src="images/uploads/image3.jpg" alt="" /></a>
                        <div className="vd-it">
                            <img className="vd-img" src="images/uploads/image4.jpg" alt="" />
                            <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="images/uploads/play-vd.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="title-hd-sm">
                        <h4>cast</h4>
                    </div>
                    <div className="mvcast-item">
                        {
                            actorsArray.map(act =>
                                <div className="cast-it d-flex">
                                    <ShowAvatar></ShowAvatar>
                                    <p className="ml-3"> {act}</p>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className="col-md-4 col-xs-12 col-sm-12">
                    <div className="sb-it">
                        <h6>Director: </h6>
                        <p><a href="#">{movieHeading.Director}</a></p>
                    </div>
                    <div className="sb-it">
                        <h6>Writer: </h6>
                        <p>{(movieHeading.Writer.split(',')).map(x =>
                            <a href="#">{x}</a>
                        )}
                        </p>
                    </div>
                    <div className="sb-it">
                        <h6>Genres:</h6>
                        <p>
                            {
                                movieHeading.Genre.split(',').map(x => <a href="#">{x}</a>)
                            }
                        </p>
                    </div>
                    <div className="sb-it">
                        <h6>Release Date:</h6>
                        <p>{movieHeading.Released}</p>
                    </div>
                    <div className="sb-it">
                        <h6>Run Time:</h6>
                        <p>{movieHeading.Runtime}</p>
                    </div>
                    <div className="sb-it">
                        <h6>IMDB Votes:</h6>
                        <p>{movieHeading.imdbVotes}</p>
                    </div>
                    <div className="sb-it">
                        <h6>IMDB Id:</h6>
                        <p>{movieHeading.imdbID}</p>
                    </div>
                    <div className="sb-it">
                        <h6>Awards & Nominations:</h6>
                        <p>{movieHeading.Awards}</p>
                    </div>
                    <div className="sb-it">
                        <h6>Type:</h6>
                        <p className="tags">
                            {movieHeading.Type}
                        </p>
                    </div>
                    <div className="ads">
                        <img src="images/uploads/ads1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverViews;