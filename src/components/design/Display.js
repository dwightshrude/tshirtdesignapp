import React from 'react';
import './Display.css';

const Display = ({ display }) => {

    return (
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img
                    className="img-resposive" src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtColor}`}
                    alt="img-Tshirt" />
            </div>
            <div className="memeText text-center">
                <div className="upperText">
                    <p>{`${display.upperText}` || 'Upper Text Here'}</p>
                </div>
                <img
                    src={`${display.url}` || 'http://via.placeholder.com/400x300'}
                    alt="memetext"
                />
                <div className="lowerText">
                    <p>{`${display.lowerText}` || 'Lower Text Here'}</p>
                </div>
            </div>
        </div>
    )
}

export default Display