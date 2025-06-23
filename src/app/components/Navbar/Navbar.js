import React from "react";
import './Navbar.css'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div class="container">
        <div class="app_name">
          <img src="/assets/pngwing.com (2).png" alt=""/>
          <p>Cognitia</p>
        </div>
     
          <ul>
            <div class="home">
           <FontAwesomeIcon icon={faHouse}  color="black" style={{width:"13px",margin:"3px" , hight:"13px"}}/>
             <Link href="/" className="nav_link">Home</Link>
            </div>
            <div class="search">
               <FontAwesomeIcon icon={faMagnifyingGlass}  color="black" style={{width:"13px",margin:"3px" , hight:"13px"}}/>
              <li>Search</li>
            </div>
            <div class="helpline">
              <FontAwesomeIcon icon={faPhone}  color="black" style={{width:"13px",margin:"3px" , hight:"13px"}}/>
              <li>Helpline</li>
            </div>
            <div class="Signin_signup">
              <FontAwesomeIcon icon={faCircleUser}  color="black" style={{width:"25px",margin:"5px" , height:"25px"}}/>
                  <p>Login</p>
                  <div class="dash"></div>
                  <p>SignUp</p>
            </div>
          </ul>
      
      </div>
      <div class="Cognitia_features">
            <ul className="Cognitia_features_ul">
  <Link href="/dashboard" className="nav_link2">My Dashboard</Link>
 <FontAwesomeIcon icon={faAngleDown}  color="black"/>
                  <Link href="/brainTask" className="nav_link2">Brain Task </Link>
                  <FontAwesomeIcon icon={faAngleDown}  color="black" />
       <Link href="/behaviourTracking" className="nav_link2">Track Behaviour</Link>
       <FontAwesomeIcon icon={faAngleDown}  color="black" />
 <Link href="/cognitiveExercise" className="nav_link2">Cognitive Exercise</Link>
 <FontAwesomeIcon icon={faAngleDown}  color="black" />
                   <Link href="/cognitivegames" className="nav_link2" >Cognitive games</Link>
                   <FontAwesomeIcon icon={faAngleDown}  color="black" />
   <Link href="/about" className="nav_link2" >About us</Link>
   <FontAwesomeIcon icon={faAngleDown}  color="black" />
            </ul>
      </div>
    </div>
  );
};
export default Navbar;
