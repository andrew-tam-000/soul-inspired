import React, {Component} from 'react';
import _ from 'lodash';
import appData from '../appData';
import Promise from 'bluebird';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './Header';


export default function Root({children, location}) {
    return (
        <div className='root'>
            <ReactCSSTransitionGroup
                component="div"
                transitionName={{
                    enter: 'header--enter',
                    enterActive: 'header--enterActive',
                    leave: 'header--leave',
                    leaveActive: 'header--leaveActive',
                    appear: 'header--appear',
                    appearActive: 'header--appearActive'
                }}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
            >
                { location.pathname === '/' ? null : <Header/> }
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
                component="div"
                transitionName={{
                    enter: 'section--enter',
                    enterActive: 'section--enterActive',
                    leave: 'section--leave',
                    leaveActive: 'section--leaveActive',
                    appear: 'section--appear',
                    appearActive: 'section--appearActive'
                }}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
            >
                {React.cloneElement(children, {
                    key: location.pathname
                })}
            </ReactCSSTransitionGroup>
        </div>
    )
}
