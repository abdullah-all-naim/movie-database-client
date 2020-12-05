import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [userInfo, setUserInfo] = useState();
    const history = useHistory()
    const handleBlur = e => {
        const newInfo = { ...userInfo };
        newInfo[e.target.name] = e.target.value;
        setUserInfo(newInfo);
    }
    const handleSubmit = (e) => {
        if (document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('password').value === '' || document.getElementById('confirm-password').value === '') {
            alert("You Must Fill All The Fields")
        }
        else {
            if(document.getElementById('password').value === document.getElementById('confirm-password').value){
                fetch('https://secure-mountain-78898.herokuapp.com/addNewUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInfo)
            })
                .then(response => response.json())
                .then(data => { 
                    if(data){
                        history.push('/login')
                    }
                })
                .catch(error => {
                    console.error(error)
                })
            }
            else{
                document.getElementById('password').style.border = '1px solid red'
                document.getElementById('confirm-password').style.border = '1px solid red'
            }
        }
        e.preventDefault()
    }
    return (
        <>
            <div className="hero common-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="hero-ct d-flex">
                                <h1 className="col-6">Hi Buddy,<br/> Create a free account</h1>
                                <ul className='text-white text-left col-6'>
                                    <h3>Benefits of your free account</h3>
                                    <li>Personalized Recommendations</li>
                                    <li>Discover shows you'll love.</li>

                                    <li>Your Watchlist</li>
                                    <li>Track everything you want to watch and receive e-mail when movies open in theaters.</li>

                                    <li>Your Ratings</li>
                                    <li>Rate and remember everything you've seen.</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#020d18', padding: '10px 0' }}>
                <div className='d-flex flex-wrap justify-content-center my-5 w-50' style={{ border: '1px solid lightGrey', margin: 'auto', borderRadius: '15px', padding: '30px 0', backgroundColor: 'white' }}>
                    <h1 className='font-weight-bold mb-5'>Signup</h1>
                    <form className='d-flex flex-wrap justify-content-center' onSubmit={handleSubmit}>
                        <div className="form-group col-md-8 mb-4">
                            <input type="text" className="form-control" name='name' id='name' placeholder="Username" onBlur={handleBlur} pattern="/^[\p{L}\p{N}]+(?:[- \'\x26][\p{L}\p{N}]+| [\x26] [\p{L}\p{N}]+)*$/iu" required="required" />
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input type="text" className="form-control" name='email' id='email' placeholder="Enter Your Email Address" onBlur={handleBlur} />
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input type="password" className="form-control" name='password' id='password' placeholder="Password" onBlur={handleBlur}  required="required" />
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input type="password" className="form-control" name='confirmPassword' id='confirm-password' placeholder="Confirm Password"  required="required"/>
                        </div>
                        <button className="btn btn-danger col-md-8 ml-2 py-3" ><h4>Signup</h4></button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;