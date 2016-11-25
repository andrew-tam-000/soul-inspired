import React, {Component} from 'react';
import classnames from 'classnames';
import LocationsByTime from './LocationsByTime';
import appData from '../appData';
import Map from './Map';
import Filter from './Filter';
import Section from './Section';


const classesList = ['Location', 'Weekday'];


class Classes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'weekday'
        }
    }

    render() {
        return (
            <Section
                title='Find a class that works for you'
                className='classes'
                description='Come and join us at one of our various locations in the bay area!'
            >
                <ul className='classes__filter'>
                    <Filter
                        list={classesList}
                        activeFilter={this.state.filter}
                        onClick={ filterItem => this.setState({filter: filterItem}) }
                    />
                </ul>

                <div className='classes__list'>
                    {
                        _.map(
                            classesList
                            , (filter, idx) => (
                                <div
                                    key={filter.toLowerCase()}
                                    className={
                                        classnames({
                                            'classes__list-item': true
                                            , 'classes__list-item--active': filter.toLowerCase() === this.state.filter
                                        })
                                    }
                                >
                                    { idx === 0 ? <Map/> : <LocationsByTime locations={appData.locations}/> }
                                </div>
                            )
                        )
                    }
                </div>
            </Section>
        );
    }

}


export default Classes;
