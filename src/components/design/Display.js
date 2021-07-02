import React from 'react';
import './Display.css';

const Display = () => {
    return (
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                    className="img-resposive" src="https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/black.png"
                    alt="img-Tshirt" />
            </div>
            <div className="memeText text-center">
                <div className="upperText">
                    <p>Upper Text</p>
                </div>
                <img
                    src="http://via.placeholder.com/400x300"
                    alt="memetext"
                />
                <div className="lowerText">
                    <p>Lower Text</p>
                </div>
            </div>
        </div>
    )
}

export default Display