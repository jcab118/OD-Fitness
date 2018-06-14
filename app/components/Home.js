import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom'
import Header from './Header';
import Google_Map from './Google_Map'

export default class Home extends React.Component {
  render() {
    return (
        <div id = "home"className="text-center">
          <Header/>
          <div id="social">
            <h3>ODFitness</h3>
              <a href ="tel: +19178056156">(917)-805-6156</a>
              <br></br> 
              <a href ="email:Team@ODFitnessNYC.com">Team@ODFitnessNYC.com</a>
              <h5>You can also us  on</h5> 
                <a href="https://www.facebook.com/odfitnessnyc/" target="_blank">
                  <i class="fab fa-facebook-square fa-3x"></i></a>
                <a href="https://www.instagram.com/ODFitnessNYC" target="_blank">
                  <i class="fab fa-instagram fa-3x"></i></a>
          </div>
          <div id= "desc">
       	    <img className ="text-center" id= "logo" src = "./images/Logo.jpg"></img>
             <p>ODFitness is a fitness bootcamp created by (O)tniel & (D)erek 
               that combines strength and conditioning with cardiovascular endurance to
               reate a well-rounded workout.</p>
             <p>If you're looking to lose fat, build strength, and improve your 
                cardiovascular endurance; then look no further than ODFitness</p>
          </div>  
          <div id = "location" className = "text-center">
            <p>We are located in</p>
            <p>131 West 72nd St</p>
            <p>New York, New York 10023</p>
          </div> 
          <div id ="skyline">
            <img id= "skyline" src = "./images/nyc-skyline.jpg"></img>
          </div>
          <div id ="gm">
            <Google_Map lat={40.7781173} lng={-73.97976599999998}/>
          </div>
       </div>
    );
  }
};