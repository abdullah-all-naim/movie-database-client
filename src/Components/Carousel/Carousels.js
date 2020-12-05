import React from "react";
import Carousel from "react-elastic-carousel";
import "./Carousels.css";
import movieData from "../MovieData/movie-data-short.json"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

function Carousels() {
    return (
        <div className="App">
            <Carousel breakPoints={breakPoints} style={{ marginTop: '120px' }}>
                <div>
                    {
                        movieData.slice(0, 1).map(x =>
                            <div className="movie-item">
                                <img src={x.Poster} alt="" />
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        movieData.slice(1, 2).map(x =>
                            <div>

                                <img src={x.Poster} alt="" />
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        movieData.slice(3, 4).map(x =>
                            <div>

                                <img src={x.Poster} alt="" />
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        movieData.slice(5, 6).map(x =>
                            <div>

                                <img src={x.Poster} alt="" />
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        movieData.slice(6, 7).map(x =>
                            <div>

                                <img src={x.Poster} alt="" />
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        movieData.slice(8, 9).map(x =>
                            <div>

                                <img src={x.Poster} alt="" />
                            </div>
                        )
                    }
                </div>
                <div>
                    {
                        movieData.slice(9, 10).map(x =>
                            <div>

                                <img src={x.Poster} alt="" />
                            </div>
                        )
                    }
                </div>
            </Carousel>
        </div>
    );
}
export default Carousels;