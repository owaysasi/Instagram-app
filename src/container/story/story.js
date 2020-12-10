import React from 'react';
import {FiPlusSquare as Plus} from "react-icons/fi";
import PB1 from '../Logo/PB.png';
import PB2 from '../Logo/PB2.png';
import './story.css';

function Story() {

    return(
        <div className="container-story">
            <div className="add-story">
                <Plus/>
            </div>
            <div className="story-post">
                <img className="croped-pic" src={PB2}/>
                <img className="story-pic" src={PB1}/>
            </div>
            <div className="story-post">
                <img className="croped-pic" src={PB2}/>
                <img className="story-pic" src={PB1}/>
            </div>
            <div className="story-post">
                <img className="croped-pic" src={PB2}/>
                <img className="story-pic" src={PB1}/>
            </div>
            <div className="story-post">
                <img className="croped-pic" src={PB2}/>
                <img className="story-pic" src={PB1}/>
            </div>
        </div>
    );
}

export default Story;