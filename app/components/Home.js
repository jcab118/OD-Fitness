import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom'
import Header from './Header';
import Google_Map from './Google_Map'

class Sign_up extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }
  signUpForm(e){
    e.preventDefault();
      var newUser = {
        name: this.refs.name.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
      }
      fetch('/api/sign-up', {
          method: 'post',
          body: JSON.stringify(newUser),
          headers: {
              'content-type': 'application/json',
              'accept': 'application/json'
          },
          credentials: 'same-origin'
      }).then((response) => response.json())
      .then((results) => {
        this.props.history.push("/log_in");
      }); 
  }
  render() {
    return (
        <div className="text-center">
          <Header/>
            <div id= "desc">
         	    <img className ="text-center" id= "code" src = "./images/Logo.jpg"></img>
               <p>ODFitness is a fitness bootcamp created by (O)tniel & (D)erek 
                 that combines strength and conditioning with cardiovascular endurance to
                 reate a well-rounded workout.</p>
               <p>If you're looking to lose fat, build strength, and improve your 
                  cardiovascular endurance; then look no further than ODFitness</p>
            </div>  
              <div id ="location">
              <p>We are located in</p>
              <img className ="text-center" id= "code" src = "./images/nyc-skyline.jpg"></img>
              </div> 
				 <div id ="form">
					<form id="sign-in-form" onSubmit={this.signUpForm.bind(this)}>
						<h4>Try Us For Free</h4>
	      	            <label>Name</label><br></br>
	      	            <input className="text-center" type="text" ref="name" /><br></br>
	      	            <label>Email</label><br></br>
	      	            <input className="text-center" type="text" ref="email" /><br></br>
	      	            <label>Phone</label><br></br>
	      	            <input className="text-center" type="text" ref="Phone"/><br></br>
	      	            <input className="btn btn-danger" type="submit" />        
		          </form>
		      	</div>
		        <div>
		        <Google_Map/>
		        </div>
       </div>
    );
  }
};
export default withRouter(Sign_up)