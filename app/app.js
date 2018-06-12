import React from 'react';
import ReactDom from 'react-dom'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js';
import Location from './components/Location';
import Guide from './components/guide';

render(
	<BrowserRouter>{routes}</BrowserRouter>,
	document.getElementById('app')
);