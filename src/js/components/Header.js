import React, {Component} from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import appData from '../appData';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/'>
                    <img className='header__logo' src='./images/logo.svg'/>
                </Link>
                <div className='header__items'>
                    {
                        _.map(appData.nav, item => (
                            <Link key={item.link} to={item.link} className='header__item'>
                                <span className='header__item-text'>
                                    {item.title}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Header;
