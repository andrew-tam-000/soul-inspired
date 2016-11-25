import React, {Component} from 'react';
import { Link } from 'react-router'
import appData from '../appData';
import _ from 'lodash';

class Homepage extends Component{
    render() {
        return (
            <div className='landing section'>
                <div className='container  landing__title'>
                    Soul Inspired Line Dancers
                </div>
                <div className='container  landing__description'>
                    Music and dance is good for the heart, mind and soul
                </div>
                <ul className='landing__nav'>
                    {
                        _.map(appData.nav, item => (
                            <li>
                                <Link to={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <a href='mailto:soulinspiredld@gmail.com' className='landing__email'>
                    soulinspiredld@gmail.com
                </a>
                <ul className='landing__social'>
                    <li>
                        <a href='https://www.facebook.com/SoulInspiredLineDancers/'>
                            Facebook
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Homepage;
