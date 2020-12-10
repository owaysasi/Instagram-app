import React from 'react';
import PostPic from '../Logo/nature-anime.png';
import Profile from '../Logo/profile-pic.png';
import './post.css';
import {
    BsThreeDotsVertical as Menu,
    BsHeartFill as Heart,
    BsCursor as Cursor,
    BsFillBookmarkFill as Bookmark,
  } from "react-icons/bs";
import { FiMessageSquare as Message } from "react-icons/fi";

function Post() {

    return(
        <div className="container-post">
            <div className="row-post">
                <div className="poster">
                    <div className="post-title">
                        <div className="title-pic">
                                <img className="profile-inst" src={Profile}></img>
                        </div>
                        <div className="title-info">
                                <p className="title-name">Emma Watson</p>
                                <p className="title-desc">Paris, France</p>
                        </div>
                        
                        <div className="post-sett">
                            <Menu color="#F73E60"/>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${PostPic})`, backgroundSize:"cover", backgroundPosition:"center"}} className="post-pic"></div>
                    <div className="post-reaction">
                        <div className="react-icons Hicon">
                        <Heart color="#F73E60"/>
                        </div>
                        <div className="react-icons Micon">
                            <Message color="gray"/>
                        </div>
                        <div className="react-icons Cicon">
                            <Cursor color="gray"/>
                        </div>
                        <div className="react-icons Bicon">
                            <Bookmark color="gray"/>
                        </div>
                    </div>
                </div>
                    {/** another poster */}
                    <div className="poster">
                    <div className="post-title">
                        <div className="title-pic">
                                <img className="profile-inst" src={Profile}></img>
                        </div>
                        <div className="title-info">
                                <p className="title-name">Emma Watson</p>
                                <p className="title-desc">Paris, France</p>
                        </div>
                        
                        <div className="post-sett">
                            <Menu color="#F73E60"/>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${PostPic})`, backgroundSize:"cover", backgroundPosition:"center"}} className="post-pic"></div>
                    <div className="post-reaction">
                        <div className="react-icons Hicon">
                        <Heart color="#F73E60"/>
                        </div>
                        <div className="react-icons Micon">
                            <Message color="gray"/>
                        </div>
                        <div className="react-icons Cicon">
                            <Cursor color="gray"/>
                        </div>
                        <div className="react-icons Bicon">
                            <Bookmark color="gray"/>
                        </div>
                    </div>
                </div>
                    {/** another poster */}
                    <div className="poster">
                    <div className="post-title">
                        <div className="title-pic">
                                <img className="profile-inst" src={Profile}></img>
                        </div>
                        <div className="title-info">
                                <p className="title-name">Emma Watson</p>
                                <p className="title-desc">Paris, France</p>
                        </div>
                        
                        <div className="post-sett">
                            <Menu color="#F73E60"/>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${PostPic})`, backgroundSize:"cover", backgroundPosition:"center"}} className="post-pic"></div>
                    <div className="post-reaction">
                        <div className="react-icons Hicon">
                        <Heart color="#F73E60"/>
                        </div>
                        <div className="react-icons Micon">
                            <Message color="gray"/>
                        </div>
                        <div className="react-icons Cicon">
                            <Cursor color="gray"/>
                        </div>
                        <div className="react-icons Bicon">
                            <Bookmark color="gray"/>
                        </div>
                    </div>
                </div>  
            </div>
            {/** another row */}
            <div className="row-post">
                <div className="poster">
                    <div className="post-title">
                        <div className="title-pic">
                                <img className="profile-inst" src={Profile}></img>
                        </div>
                        <div className="title-info">
                                <p className="title-name">Emma Watson</p>
                                <p className="title-desc">Paris, France</p>
                        </div>
                        
                        <div className="post-sett">
                            <Menu color="#F73E60"/>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${PostPic})`, backgroundSize:"cover", backgroundPosition:"center"}} className="post-pic"></div>
                    <div className="post-reaction">
                        <div className="react-icons Hicon">
                        <Heart color="#F73E60"/>
                        </div>
                        <div className="react-icons Micon">
                            <Message color="gray"/>
                        </div>
                        <div className="react-icons Cicon">
                            <Cursor color="gray"/>
                        </div>
                        <div className="react-icons Bicon">
                            <Bookmark color="gray"/>
                        </div>
                    </div>
                </div>
                    {/** another poster */}
                    <div className="poster">
                    <div className="post-title">
                        <div className="title-pic">
                                <img className="profile-inst" src={Profile}></img>
                        </div>
                        <div className="title-info">
                                <p className="title-name">Emma Watson</p>
                                <p className="title-desc">Paris, France</p>
                        </div>
                        
                        <div className="post-sett">
                            <Menu color="#F73E60"/>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${PostPic})`, backgroundSize:"cover", backgroundPosition:"center"}} className="post-pic"></div>
                    <div className="post-reaction">
                        <div className="react-icons Hicon">
                        <Heart color="#F73E60"/>
                        </div>
                        <div className="react-icons Micon">
                            <Message color="gray"/>
                        </div>
                        <div className="react-icons Cicon">
                            <Cursor color="gray"/>
                        </div>
                        <div className="react-icons Bicon">
                            <Bookmark color="gray"/>
                        </div>
                    </div>
                </div>
                    {/** another poster */}
                    <div className="poster">
                    <div className="post-title">
                        <div className="title-pic">
                                <img className="profile-inst" src={Profile}></img>
                        </div>
                        <div className="title-info">
                                <p className="title-name">Emma Watson</p>
                                <p className="title-desc">Paris, France</p>
                        </div>
                        
                        <div className="post-sett">
                            <Menu color="#F73E60"/>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${PostPic})`, backgroundSize:"cover", backgroundPosition:"center"}} className="post-pic"></div>
                    <div className="post-reaction">
                        <div className="react-icons Hicon">
                        <Heart color="#F73E60"/>
                        </div>
                        <div className="react-icons Micon">
                            <Message color="gray"/>
                        </div>
                        <div className="react-icons Cicon">
                            <Cursor color="gray"/>
                        </div>
                        <div className="react-icons Bicon">
                            <Bookmark color="gray"/>
                        </div>
                    </div>
                </div>  
            </div>
           
        </div>
    );
}

export default Post;