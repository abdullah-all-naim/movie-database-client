import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { UserContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            margin: 'auto',
            textAlign: 'center'
        },
    },
}));
const LoginPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: `/userprofile` } };
    const classes = useStyles();
    const [getUserInfo, setGetUserInfo] = useState([]);
    useEffect(() => {
        fetch('https://secure-mountain-78898.herokuapp.com/getuserinfo')
            .then(res => res.json())
            .then(data => {
                setGetUserInfo(data)
            })
    }, [])

    const handleSubmit = (e) => {
        if (getUserInfo.find(x => x.email == document.getElementById('email').value) && getUserInfo.find(x => x.name == document.getElementById('name').value) && getUserInfo.find(x => x.password == document.getElementById('password').value)) {
            const signedIn = { name: document.getElementById('name').value, loggedIn: true }
            sessionStorage.setItem('isLoggedIn', JSON.stringify(signedIn));
            history.push('userprofile')
            window.location.reload()
            
        }
        else {
            document.getElementById('login-alert').style.display = 'block';
        }
        e.preventDefault()
        setLoggedInUser(JSON.parse(sessionStorage.getItem('isLoggedIn')))
    }
    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct">
                                <h1>Hi Buddy,Have an account? <br /> Then login and go to your dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-danger' style={{ display: 'none' }} id='login-alert'>
                <h4 className="text-center text-white py-2">Login failed!Please try again</h4>
            </div>
            <div style={{ backgroundColor: '#020d18', padding: '10px 0' }}>
                <div className='d-flex flex-wrap justify-content-center my-5 w-50' style={{ border: '1px solid lightGrey', margin: 'auto', borderRadius: '15px', padding: '30px 0', backgroundColor: 'white' }}>
                    <h1 className='font-weight-bold mb-5'>Login</h1>
                    <div className='d-flex flex-wrap justify-content-center' >
                        <div className="form-group col-md-8 mb-4">
                            <input type="text" className="form-control" name='name' id='name' placeholder="Username" />
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input type="text" className="form-control" name='companyName' id='email' placeholder="Enter Your Email Address" />
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input type="password" className="form-control" name='companyName' id='password' placeholder="Password" />
                        </div>
                        <button onClick={handleSubmit} className="btn btn-danger col-md-8 ml-2 py-3"  ><h4 className='text-white'>Login</h4></button>
                    </div>
                    <p>Don't have an Account? <Link to='/signup'>Create an Account</Link> </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;