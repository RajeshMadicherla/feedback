/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHouse} from '@fortawesome/free-solid-svg-icons'
import{faStar} from '@fortawesome/free-solid-svg-icons'
import{faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import{faUser} from '@fortawesome/free-solid-svg-icons'

import "./index.css"

const Feedback = () => {
    //const [inputValue, setInputValue] = useState('');
    //const handleInputChange = (event) => {
       // setInputValue(event.target.value);
    //};

    const onGenerate = async() => {
        const apiUrl = 'https://apis.ccbp.in/prime-deals'
        const options = {
            method : "GET",
        }
        const response =  await  fetch(apiUrl, options)
        console.log(response)
    }

    return (
            <div className="feedback-app-container">
                <div class="sidebar">
                    <div class="logo-details">
                    <i class='bx bxl-codepen icon'></i>
                    <div class="logo_name">SideMenu</div>
                    <i class='bx bx-menu' id="btn"></i>
                </div>
                <ul class="nav-list">
                <li class='f-icons'>
                    
                    <FontAwesomeIcon icon={faHouse} color="white" size="2x"/>
                    <span class="tooltip">Home</span>
                </li>
                <li class='f-icons'>
                    <a href="link">
                    <FontAwesomeIcon icon={faStar} color="white" size="2x"/>
                    <span class="links_name">My Appraisal</span>
                    </a>
                    <span class="tooltip">My Appraisal</span>
                </li>
                <li class='f-icons'>
                    <a href="link">
                    <FontAwesomeIcon icon={faThumbsUp} color="white" size="2x"/>
                    <span class="links_name">My Approvals</span>
                    </a>
                    <span class="tooltip">My Approvals</span>
                </li>
                <li class='f-icons'>
                    <a href="link">
                    <FontAwesomeIcon icon={faUser} color="white" size="2x"/>
                    <span class="links_name">Appraise List</span>
                    </a>
                    <span class="tooltip">Appraise List</span>
                </li>
                </ul>
   </div>
                <div className="cmnts-container">
                    
                    <div class="container">
                        <h1>Feedback</h1>
                        <div class="form-floating w-100">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" cols="70" rows="10"></textarea>
                        </div>
                        <div class="form-floating w-100">
                        <h1>Learning Path</h1>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" cols="40" rows="5"></textarea>
                    </div>
                        
                    </div>
                    <div>
                        <h1>Keywords</h1>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" cols="30" rows="5"></textarea>
                        <button class="btn2" onClick={onGenerate}>Generate</button>
                        <button class="btn2" type="submit">Submit</button>
                    </div>
                </div>
            </div>
    );
}

export default Feedback