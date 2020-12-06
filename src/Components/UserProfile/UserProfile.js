import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import FavouriteMovies from '../FavouriteMovies/FavouriteMovies';
import { Link, useHistory } from 'react-router-dom';
import RatedMovies from '../RatedMovies/RatedMovies';
import ShowAvatar from '../Avatar/Avatar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const UserProfile = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    const userInfo = JSON.parse(sessionStorage.getItem('isLoggedIn'))
    const [userMail, setUserMail] = useState([])
    const handleClick = () => {
        history.push('/login')
        window.location.reload()
        sessionStorage.clear()
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div class="hero slider">
                <div class="container">
                    <div class="d-flex flex-wrap">
                        <div class="col-md-12">
                            <div class="hero-ct">
                                <h1>howdy, {userInfo.name}</h1>
                                <ul class="breadcumb">
                                    <li class="active"><Link to='/'>Home</Link></li>
                                    <li> <span class="ion-ios-arrow-right"></span>Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-single">
                <div class="container">
                    <div class="row ipad-width">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                            <div class="user-information">
                                <div class="user-img">
                                    {/* <a ><img src="images/uploads/user-img.png" alt="" /><br /></a> */}
                                    <div style={{ width: '50px', margin: 'auto' }}>
                                        <ShowAvatar></ShowAvatar>
                                    </div>
                                </div>
                                <div className={classes.root}>
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        className={classes.tabs}
                                    >
                                        <Tab style={{ fontSize: '15px', fontWeight: 'bold', color: 'white' }} label="Favourite Movies" {...a11yProps(0)} />
                                        <Tab style={{ fontSize: '15px', fontWeight: 'bold', color: 'white' }} label="Rated Movies" {...a11yProps(1)} />
                                    </Tabs>
                                </div>
                                <div class="user-fav">
                                    <p>Others</p>
                                    <ul>
                                        <li><p style={{ fontSize: '15px', fontWeight: 'bold', color: 'white', cursor: 'pointer' }} onClick={handleClick}>LOGOUT</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-12 col-xs-12">
                            <TabPanel value={value} index={0}>
                                <FavouriteMovies user={userInfo.name}></FavouriteMovies>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <RatedMovies user={userInfo.name}></RatedMovies>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;