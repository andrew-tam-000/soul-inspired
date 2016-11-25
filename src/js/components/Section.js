import React, {Component} from 'react';
import _ from 'lodash';

class Section extends Component {
    render() {
        return (
            <div className={`section ${this.props.className}`}>
                <div className='container  section__title'>
                    <span className='pastel'>{this.props.title.split(' ')[0]}</span> {this.props.title.split(' ').slice(1).join(' ')}
                </div>
                <div className='container  section__description'>
                    {this.props.description}
                </div>
                <div className='section__content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default Section;
