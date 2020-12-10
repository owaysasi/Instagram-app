import React from 'react';
import './container.css'
import Sidebar from './sidebar/sidebar';
import Navbar from './navbar/navbar';
import Post from './post/post';
import Story from './story/story';

function Container (){

    return(
        <div className="container">
            <div className="sides right-side">
                <Navbar/>
                <Story/>
                <Post/>
            </div>
            <div className="sides left-side"><Sidebar/></div>
        </div>
    );
}

export default Container;