import React from 'react';  
import Camera from '../Logo/insta-camera.png';
import Profile from '../Logo/profile-pic.png';
import './navbar.css'
import {AiOutlineSearch as Search} from "react-icons/ai";

function Navbar() {

    return(
        <div className="container-navbar nav_item">
            <div className="nav_item"><img className="nav-cam" src={Camera}></img></div>
            <div className="nav_search">
                    <input type="text" className="search" value="search" name="search"></input>
                    <div className="search_icon">
                        <Search color="palevioletred"/>
                    </div>
            </div>
            
            <div className="nav_item profile">
                <div className="profile-item">
                    <img className="profile-inst" src={Profile}></img>
                </div>
                <div className="profile-item">
                    <p className="profile-name">Emma Watson</p>
                    <p className="profile-desc">Actress, Model<br/>Paris, France</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;