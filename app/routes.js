import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import About_Derek from "./components/About_Derek";
import About_Otniel from "./components/About_Otniel";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Google_Map from "./components/Google_Map";
import Location from "./components/Location";
import Sign_up from "./components/Sign_up";



export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route exact path="/" component={Header} />
    	<Route exact path="/" component={About_Otniel} />
    	<Route exact path="/" component={About_Derek} />
    	<Route exact path="/" component={Contact} />
    	<Route exact path="/" component={Testimonials} />
        <Route exact path="/" component={Google_Map} />
        <Route exact path="/" component={Location} />
        <Route exact path="/" component={Sign_up} />
    </Switch>
);