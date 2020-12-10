import React from 'react';
import Insta from '../Logo/instaLogo.png';
import {
    AiFillHome as Home,
    AiOutlinePoweroff as Logout,
  } from "react-icons/ai";
  import { RiLiveFill as Live } from "react-icons/ri";
  import { FiMessageSquare as Message } from "react-icons/fi";
  import {
    MdNotifications as Notification,
    MdSettings as Settings,
  } from "react-icons/md";
import './sidebar.css'

function Sidebar() {

    return(
        <div className="container-sidebar">
            <div className="Insta-logo" style={{backgroundImage:`url(${Insta})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
            <a className="btn_side"><Home/>Home</a>
            <a className="btn_side"><Live/>Live</a>
            <a className="btn_side"><Message/>Message</a>
            <a className="btn_side"><Notification/>Notifications</a>
            <a className="btn_side"><Settings/>Settings</a>
            <a className="btn_side"><Logout/>Logout</a>
        </div>
    );
}

export default Sidebar;