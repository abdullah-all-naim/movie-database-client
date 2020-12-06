import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory, Link } from 'react-router-dom';
import ShowAvatar from '../Avatar/Avatar';
import movieData from '../MovieData/movie-data.json'
import SearchBar from '../SearchBar/SearchBar';
const Navigation = () => {
    const history = useHistory()
    const handleSearch = (e) => {


    }
    return (
        <>
            <div id="preloader">
                <img class="logo" src="../../images/logo1.png" alt="" width="119" height="58" />
                <div id="status">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <header className="pt-3 bd-hd px-5">
                <Navbar expand="lg">
                    <div className='mr-5'>
                        <Link to='/'><img className="logo" src="../../images/logo1.png" alt="" width="119" height="58" /></Link>
                    </div>
                    <div class="top-search col-5 ml-3">
                        <SearchBar></SearchBar>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="text-decoration-none font-weight-bold text-white mx-3 my-4" to="/" style={{ fontSize: '15px', fontWeight: 'bold' }}>HOME</NavLink>
                            <NavLink className="text-decoration-none font-weight-bold text-white mx-3 my-4" to='/movie-grid' style={{ fontSize: '15px', fontWeight: 'bold' }}>MOVIE GRID</NavLink>
                            <NavLink className="text-decoration-none font-weight-bold text-white mx-3 my-4" to="/comingsoon" style={{ fontSize: '15px', fontWeight: 'bold' }}>ACTORS</NavLink>
                            {sessionStorage.getItem('isLoggedIn') ?
                                <>
                                    <NavLink className="text-decoration-none font-weight-bold text-white mx-3 my-2" style={{ fontSize: '15px', fontWeight: 'bold' }} to='/userprofile'>
                                        <ShowAvatar></ShowAvatar>
                                    </NavLink>
                                    <button className='btn btn-warning px-5 mx-3 py-2' style={{ fontSize: '15px', fontWeight: 'bold', borderRadius: '30px' }} onClick={() => history.push('/userprofile')}>DASHBOARD</button>
                                </>
                                : <>
                                    <button className='btn btn-warning px-5 mx-3 py-3 my-2' style={{ fontSize: '15px', fontWeight: 'bold', borderRadius: '20px' }} onClick={() => history.push('/login')}>LOGIN</button>
                                    <button className='btn btn-danger px-5 mx-3 py-3 my-2' style={{ fontSize: '15px', fontWeight: 'bold', borderRadius: '20px' }} onClick={() => history.push('/signup')}>SIGNUP</button>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    );
};

export default Navigation;


