import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import About_Derek from "./components/About_Derek";
import About_Otniel from "./components/About_Otniel";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Guide from "./components/Guide";


export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route exact path="/" component={Header} />
    	<Route exact path="/" component={About_Otniel} />
    	<Route exact path="/" component={About_Derek} />
    	<Route exact path="/" component={Contact} />
    	<Route exact path="/" component={Testimonials} />
        <Route exact path="/" component={Guide} />
        <Route exact path="/" component={Location} />
    </Switch>
);