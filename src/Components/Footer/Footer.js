import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="ht-footer">
            <div className="container">
                <div className="flex-parent-ft">
                    <div className="flex-child-ft item1">
                        <Link to='/'><img className="logo" src="../../images/logo1.png" alt="" /></Link>
                        <p>5th Avenue st, manhattan<br />
						Canada, NY 10001</p>
                        <p>Call us: <a>(+01) 202 342 6789</a></p>
                    </div>
                    <div className="flex-child-ft item2">
                        <h4>Resources</h4>
                        <ul>
                            <li><a>About</a></li>
                            <li><a>Blockbuster</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>Forums</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Help Center</a></li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item3">
                        <h4>Legal</h4>
                        <ul>
                            <li><a>Terms of Use</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Security</a></li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item4">
                        <h4>Account</h4>
                        <ul>
                            <li><a>My Account</a></li>
                            <li><a>Watchlist</a></li>
                            <li><a>Collections</a></li>
                            <li><a>User Guide</a></li>
                        </ul>
                    </div>
                    <div className="flex-child-ft item5">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter system now <br /> to get latest news from us.</p>
                        <form action="#">
                            <input type="text" placeholder="Enter your email..." />
                        </form>
                        <a className="btn">Subscribe now</a>
                    </div>
                </div>
            </div>
            <div className="ft-copyright">
                <div className="ft-left">
                    <p>© 2020 Blockbuster. All Rights Reserved. Designed by Peter Ndukwe.</p>
                </div>
                <div className="backtotop">
                    <p><a id="back-to-top">Back to top <i className="ion-ios-arrow-thin-up"></i></a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;