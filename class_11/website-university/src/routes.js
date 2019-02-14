import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

export default(
	<Switch>
	  <Route path="/" exact component={Home}/>
	  <Route path="/about" exact component={About}/>
	  <Route component={NotFound}/>
	</Switch>
);
