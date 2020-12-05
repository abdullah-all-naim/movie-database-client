import React from 'react';

const ComingSoon = () => {
    return (
        <div class="page-single-2 slider">
            <div class="container">
                <div class="row ipad-width">
                    <div class="left-content">
                        <br /> <br /> <br />
                        <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <div class="coming-ct">
                                    <div id="clockdiv" class="time">
                                        <div class="it-time">
                                            <span class="days"></span><br />
                                            <p>days</p>
                                        </div>

                                        <div class="it-time">
                                            <span class="hours"></span><br />
                                            <p>hours</p>
                                        </div>
                                        <div class="it-time">
                                            <span class="minutes">
                                            </span><br />
                                            <p>Minutes</p>
                                        </div>
                                        <div class="it-time">
                                            <span class="seconds">
                                            </span><br />
                                            <p>Seconds</p>
                                        </div>
                                    </div>
                                </div>
                                <h3>Nofication me</h3>
                                <form action="#">
                                    <input class="email" type="text" placeholder="Enter your email" />
                                    <input class="redbtn" type="submit" placeholder="subscribe" />
                                </form>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <h1>Coming soon</h1>
                                <p>We are working hard to get back to you in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;