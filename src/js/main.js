import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './components/root';
import Location from './components/Location';
import Classes from './components/Classes';
import About from './components/About';
import Events from './components/Events';
import Homepage from './components/Homepage';
import Contact from './components/Contact';

import store from './redux/store';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import attachFastClick from 'fastclick';
attachFastClick.attach(document.body);



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={Homepage}/>
            <Route path='about' component={About}/>
            <Route path='events' component={Events}/>
            <Route path='classes' component={Classes}/>
            <Route path='contact' component={Contact}/>
        </Route>
    </Router>
    , document.getElementById('root')
);
