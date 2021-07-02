import React from 'react';
const urlImgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Settings = () => {
    return (
        <div className="card bg-light container">
            <h3 className="text-center">Settings</h3>
            <h4>Change T-shirt Color</h4>
            <div ClassName="tshirt-color">
                <img src={'${urlImgBase}white.png'} alt="white-tshirt" />
                <img src={'${urlImgBase}black.png'} alt="black-tshirt" />
                <img src={'${urlImgBase}grey.png'} alt="grey-tshirt" />
                <img src={'${urlImgBase}blue.png'} alt="blue-tshirt" />
                <img src={'${urlImgBase}red.png'} alt="red-tshirt" />
            </div>
            <hr />
            <h4>Write Text</h4>
            <input type="text" className="form-control form-control-sm mb-2" placeholder="Upper Text" />
            <input type="text" className="form-control form-control-sm" placeholder="Lower Text" />
            <hr />
            <h4>Upload Image</h4>
            <div className="form-group">
                <input type="file" className="form-control-file mb-2" />
            </div>
            <hr />
            <h4>Text Size</h4>
            <input type="range" min="0" max="100" />
            <hr />
            <h4>Text Color</h4>
            <select className="form-control-sm mb-2">
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
            </select>
            <hr />
            <button className="btn btn-primary btn-sm-mb-2">Save</button>
        </div>
    )
}

export default Settings