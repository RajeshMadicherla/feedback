import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faHouse} from '@fortawesome/free-solid-svg-icons'
import{faStar} from '@fortawesome/free-solid-svg-icons'
import{faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import{faUser} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from "react-router-dom"
  import './index.css';
import Feedback from '../Feedback'

const Rating  = () => {
    const navigate = useNavigate()
    return(
        <div className="App">
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
   <section class="home-section">
     <div class="profile-cont">
       <img class = "profile-img" src="data:image/jpeg;base64,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" alt="profile-img"/>
       <div class="profile-name-cont">
         <h3 class="person-name">Project Manager, Yorkshire Water</h3>
         <p class="person-mail">yorkshirewater@yw.com</p>
       </div>
       <div class="status-cont">
         <p>My Appraisal status</p>
          
       </div>
     </div>
     <hr class="hr-line"/>
     <h1 class="ratings3">Ratings</h1>
     <hr class="hr-line"/>
     <h1 class="cmnts-heading">Self Evaluation Comments</h1>
     <div class="each-cmtn-cont">
       <p class="comment">Process Compliance</p>
       <div class="comment-cont">
         <p class="cmnt-box">ABCD</p>
         <div class="rating">
           <input type="radio" name="rating"   value="5" id="5"/><label  for="5">☆</label>
           <input type="radio" name="rating"   value="4" id="4"/><label for="4">☆</label>
           <input type="radio" name="rating"   value="3" id="3"/><label for="3">☆</label>
           <input type="radio" name="rating"   value="2" id="2"/><label for="2">☆</label>
           <input type="radio" name="rating"   value="1" id="1"/><label for="1">☆</label>
         </div>
       </div>
       
     </div>
     <div class="each-cmtn-cont">
       <p class="comment">Learning and Development</p>
       <div class="comment-cont">
         <p class="cmnt-box">ABCD</p>
         <div class="rating">
             <input type="radio" name="rating1"   value="5" id="15"/><label  for="15">☆</label>
             <input type="radio" name="rating1"   value="4" id="14"/><label for="14">☆</label>
             <input type="radio" name="rating1"   value="3" id="13"/><label for="13">☆</label>
             <input type="radio" name="rating1"  value="2" id="12"/><label for="12">☆</label>
             <input type="radio" name="rating1"   value="1" id="11"/><label for="11">☆</label>
         </div>
       </div>
    </div>
     <div class="each-cmtn-cont">
       <p class="comment">Team collaboration</p>
       <div class="comment-cont">
         <p class="cmnt-box">ABCD</p>
         <div class="rating">
           <input type="radio" name="rating2"   value="5" id="25"/><label  for="25">☆</label>
           <input type="radio" name="rating2"   value="4" id="24"/><label for="24">☆</label>
           <input type="radio" name="rating2"   value="3" id="23"/><label for="23">☆</label>
           <input type="radio" name="rating2"   value="2" id="22"/><label for="22">☆</label>
           <input type="radio" name="rating2"   value="1" id="21"/><label for="21">☆</label>
         </div>
       </div>
     </div>
     <div class="each-cmtn-cont">
       <p class="comment">delivery</p>
       <div class="comment-cont">
         <p class="cmnt-box">ABCD</p>
         <div class="rating">
           <input type="radio" name="rating3"   value="5" id="35"/><label  for="35">☆</label>
           <input type="radio" name="rating3"   value="4" id="34"/><label for="34">☆</label>
           <input type="radio" name="rating3"   value="3" id="33"/><label for="33">☆</label>
           <input type="radio" name="rating3"   value="2" id="32"/><label for="32">☆</label>
           <input type="radio" name="rating3"   value="1" id="31"/><label for="31">☆</label>
         </div>
       </div>
     </div>
     <div class="each-cmtn-cont">
       <p class="comment">communication</p>
       <div class="comment-cont">
         <p class="cmnt-box">ABCD</p>
         <div class="rating">
           <input type="radio" name="rating4"   value="5" id="45"/><label  for="45">☆</label>
           <input type="radio" name="rating4"   value="4" id="44"/><label for="44">☆</label>
           <input type="radio" name="rating4"   value="3" id="43"/><label for="43">☆</label>
           <input type="radio" name="rating4"   value="2" id="42"/><label for="42">☆</label>
           <input type="radio" name="rating4"   value="1" id="41"/><label for="41">☆</label>
         </div>
       </div>      
     </div>
     <div class="each-cmtn-cont">
       <p class="comment">customer focus</p>
       <div class="comment-cont">
         <p class="cmnt-box">ABCD</p>
         <div class="rating">
           <input type="radio" name="rating5"   value="5" id="55"/><label  for="55">☆</label>
           <input type="radio" name="rating5"   value="4" id="54"/><label for="54">☆</label>
           <input type="radio" name="rating5"   value="3" id="53"/><label for="53">☆</label>
           <input type="radio" name="rating5"   value="2" id="52"/><label for="52">☆</label>
           <input type="radio" name="rating5"   value="1" id="51"/><label for="51">☆</label>
         </div>
       </div>    
     </div> 
     <hr class="hr-line"/>
     
   <div class="ai-rating-cont">
     <h1 class="ai-ratings-heading">AI Ratings </h1>
     <div class="rating ratings">
       <input type="radio" name="rating6" value="5" id="65"/><label for="65">☆</label>
       <input type="radio" name="rating6" value="4" id="64"/><label for="64">☆</label>
       <input type="radio" name="rating6" value="3" id="63"/><label for="63">☆</label>
       <input type="radio" name="rating6" value="2" id="62"/><label for="62">☆</label>
       <input type="radio" name="rating6" value="1" id="61"/><label for="61">☆</label>
     </div>
     <div class="btn-ratings">
     <button class="btn">Get Ratings</button>
     </div>
   </div>
   <div class="ai-rating-container">
     <h1 class="ai-ratings-heading2">Manager Ratings </h1>
     <div class="rating ratings">
       <input type="radio" name="rating7" value="5" id="75"/><label for="75">☆</label>
       <input type="radio" name="rating7" value="4" id="74"/><label for="74">☆</label>
       <input type="radio" name="rating7" value="3" id="73"/><label for="73">☆</label>
       <input type="radio" name="rating7" value="2" id="72"/><label for="72">☆</label>
       <input type="radio" name="rating7" value="1" id="71"/><label for="71">☆</label>
     </div>
   </div>
     <button class="btn2" onClick={()=>{navigate("/feedback")}}>Submit</button> 
   
   </section>
     </div>
    );
}

export default Rating