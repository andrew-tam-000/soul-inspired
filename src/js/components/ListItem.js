import React, {Component} from 'react';
import _ from 'lodash';
import classnames from 'classnames';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            extra: false
        };
    }

    toggleExtra() {
        this.setState({
            extra: !this.state.extra
        });
    }

    render() {
        return (
            <div className={
                classnames({
                    'list-item': true
                    , 'list-item--large': this.props.large
                    , 'list-item--extra': this.state.extra
                })
            }
            >
                <div className='list-item__image-holder'>
                    <img src={this.props.image} className='list-item__image'/>
                </div>
                <div className='list-item__content'>
                    {
                        _.map(this.props.rowData, row => (
                            <div className='list-item__row'>
                                {
                                    _.map(row, col => (
                                        <div className='list-item__row-col'>
                                            { col}
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    {
                        this.props.extra ? (
                            <a className='list-item__extra-toggle' onClick={this.toggleExtra.bind(this)}>Learn More</a>
                        ) : null
                    }
                </div>
                <div className='list-item__extra'>
                    <div className='list-item__extra-content'>
                        {this.props.extra}
                    </div>
                    <a className='list-item__extra-toggle' onClick={this.toggleExtra.bind(this)}>Show Less</a>
                </div>
            </div>
        );
    }
}

export default ListItem;
