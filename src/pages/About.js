import React, { Component } from 'react';
import "./About.css";
import profile_pic_furkan from "../assets/profile_pic_furkan.jpg";

export default class About extends Component {
  render() {
    return (

      <div>
        {/*left side of the page*/}
        <div class="split left">
          {/* the floating blobs */}
          <div class="shape-blob"></div>
          <div class="shape-blob one"></div>
          <div class="shape-blob two"></div>
          <div className="centered">
            <img
              className="profile_image"
              // Image goes here
              src={profile_pic_furkan}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Furkan Yayla</div>
            <div className="brief_description">
              {/* Details about you goes here */}
              <subsec>INTERESTING FACTS ABOUT ME</subsec>
              <ul>
                <li> I Love Playing Basketball</li>
                <li> I am currently an officer in a blockchain org</li>
                <li> I Try Learn About All Things Tech</li>
                <li> I Am Currently Learning About Blockchain Development</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}