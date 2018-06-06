import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route exact path="/" component={Header} />
    </Switch>
);