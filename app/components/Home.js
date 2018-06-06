import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
	  		<div className ="text-center">
	  			<img id= "code" src = "./images/Logo.jpg"></img>
	  		</div>
	  			<div id = "info" className ="text-center"> 
	  				<p>ODFitness is a fitness bootcamp created by (O)tniel & (D)erek 
	  				that combines strength and conditioning with cardiovascular endurance to
	  				create a well-rounded workout.
	  				</p>
	  				<p>If you're looking to lose fat, build strength, and improve your 
	  				cardiovascular endurance; then look no further than ODFitness
	  				</p>
	  			</div>	
	  			<div id = "trainers" className ="text-center">
		  			<h3>(O)tniel & (D)erek</h3>
		  			<h4>aka ODFitness</h4>
	  				<img id= "pic4" src = "./images/IMG_0062.jpeg"></img>
	  			</div>
	  			<div id = "pics" className ="text-center">
	  				<img id= "pic1" src = "./images/IMG_0057.jpeg"></img>
	  				<img id= "pic2" src = "./images/IMG_0059.jpeg"></img>
	  				<img id= "pic3" src = "./images/IMG_0060.jpeg"></img>
	  				<img id= "pic5" src = "./images/IMG_0063.jpeg"></img>
	  				<img id= "pic6" src = "./images/IMG_0064.jpeg"></img>
	  				<img id= "pic7" src = "./images/IMG_0065.jpeg"></img>
	  				<img id= "pic8" src = "./images/IMG_0066.jpeg"></img>
	  				<img id= "pic9" src = "./images/IMG_0077.jpeg"></img>
	  				<img id= "pic10" src = "./images/IMG_0078.jpeg"></img>
	  				<img id= "pic11" src = "./images/IMG_0080.jpeg"></img>
	  				<img id= "pic12" src = "./images/IMG_0081.jpeg"></img>
	  			</div>
	  		</div>

    	)
  	}
}
