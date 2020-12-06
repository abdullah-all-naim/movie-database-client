import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function ReviewWriting({ movieHeading }) {
    const movieShortDetails = {
        title: movieHeading.Title,
        rating: movieHeading.imdbRating,
        image: movieHeading.Poster
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [reviewInfo, setReviewInfo] = useState();
    const [reviewRating, setReviewRating] = useState()
    const handleChange = (event) => {
        setReviewRating(document.getElementById('rating').value)
    }
    const handleBlur = e => {
        const newInfo = { ...reviewInfo };
        newInfo[e.target.name] = e.target.value;
        setReviewInfo(newInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (document.getElementById('caption').value === '' || document.getElementById('username').value === '' || document.getElementById('rating').value === '' || document.getElementById('description').value === '') {
            alert("You Must Fill All The Fields")
        }
        else {
            const userReviewDetails = { ...reviewInfo, ...movieShortDetails, reviewRating }
            fetch('https://secure-mountain-78898.herokuapp.com/userreview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userReviewDetails)
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        alert("You have successfully added a new review")
                        setOpen(false)
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }

    }
    return (
        <div>
            <Button variant="outlined" style={{ fontSize: '15px', fontWeight: 'bold', backgroundColor: 'red', color: 'white' }} color="primary" onClick={handleClickOpen}>
                Write a Review
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <div className='d-flex flex-wrap justify-content-center my-5' style={{ margin: 'auto', borderRadius: '15px', padding: '30px 0', backgroundColor: 'white' }}>
                    <h1 className='font-weight-bold mb-5'>Review</h1>
                    <form className='d-flex flex-wrap justify-content-center' onSubmit={handleSubmit}>
                        <div className="form-group col-md-8 mb-4">
                            <input type="text" className="form-control" name='name' id='caption' onChange={handleBlur} placeholder="Review caption" />
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input type="text" className="form-control" name='username' id='username' onChange={handleBlur} placeholder="Username" />
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input type="number" onChange={handleChange} className="form-control" name='rating' id='rating' placeholder="Give your Rating" min="1" max="10" />
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control" onChange={handleBlur} name='description' id="description" rows="5" placeholder='Write a review'></textarea>
                        </div>
                        <button className="btn btn-danger col-md-8 ml-2 py-3"><h4>Submit Review</h4></button>
                    </form>
                </div>
            </Dialog>
        </div>
    );
}