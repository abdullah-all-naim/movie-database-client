import React from 'react';
import wonderWoman from '../../movie-poster/wonder-woman.jpg'
import oblivion from '../../movie-poster/oblivion.jpg'
import beauty from '../../movie-poster/beauty.jpg'
import fast from '../../movie-poster/fast.jpg'
import logan from '../../movie-poster/logan.jpg'
import skull from '../../movie-poster/skull.jpg'
const InTheater = () => {
    return (
        <>
            <div className="trailers" id='in-theater'>
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-12">
                            <div className="title-hd">
                                <h2>in theater</h2>
                            </div>
                            <div className="videos">
                                <div className="slider-for-2 video-ft">
                                    <div>
                                        <iframe className="item-video" src=""
                                            data-src="https://www.youtube.com/embed/1Q8fG0TtVAY"></iframe>
                                    </div>
                                    <div>
                                        <iframe className="item-video" src=""
                                            data-src="https://www.youtube.com/embed/w0qQkSuWOS8"></iframe>
                                    </div>
                                    <div>
                                        <iframe className="item-video" src=""
                                            data-src="https://www.youtube.com/embed/44LdLqgOpjo"></iframe>
                                    </div>
                                    <div>
                                        <iframe className="item-video" src=""
                                            data-src="https://www.youtube.com/embed/gbug3zTm3Ws"></iframe>
                                    </div>
                                    <div>
                                        <iframe className="item-video" src=""
                                            data-src="https://www.youtube.com/embed/e3Nl_TCQXuw"></iframe>
                                    </div>
                                    <div>
                                        <iframe className="item-video" src=""
                                            data-src="https://www.youtube.com/embed/NxhEZG0k9_w"></iframe>
                                    </div>
                                </div>
                                <div className="slider-nav-2 thumb-ft">
                                    <div className="item">
                                        <div className="trailer-img">
                                            <img src={wonderWoman} alt="photo by Barn Images" width="4096"
                                                height="2737" />
                                        </div>
                                        <div className="trailer-infor">
                                            <h4 className="desc">Wonder Woman</h4>
                                            <p>2:30</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="trailer-img">
                                            <img src={oblivion} alt="photo by Barn Images" width="350"
                                                height="200" />
                                        </div>
                                        <div className="trailer-infor">
                                            <h4 className="desc">Oblivion: Official Teaser Trailer</h4>
                                            <p>2:37</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="trailer-img">
                                            <img src={skull} alt="photo by Joshua Earle" />
                                        </div>
                                        <div className="trailer-infor">
                                            <h4 className="desc">Exclusive Interview: Skull Island</h4>
                                            <p>2:44</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="trailer-img">
                                            <img src={logan} alt="photo by Alexander Dimitrov" width="100"
                                                height="56" />
                                        </div>
                                        <div className="trailer-infor">
                                            <h4 className="desc">Logan: Director James Mangold Interview</h4>
                                            <p>2:43</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="trailer-img">
                                            <img src={beauty} alt="photo by Wojciech Szaturski" width="100"
                                                height="56" />
                                        </div>
                                        <div className="trailer-infor">
                                            <h4 className="desc">Beauty and the Beast: Official Teaser Trailer 2</h4>
                                            <p>2: 32</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="trailer-img">
                                            <img src={fast} alt="photo by Wojciech Szaturski" width="360"
                                                height="189" />
                                        </div>
                                        <div className="trailer-infor">
                                            <h4 className="desc">Fast&Furious 8</h4>
                                            <p>3:11</p>
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

export default InTheater;