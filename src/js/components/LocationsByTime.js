import React, {Component} from 'react';
import Location from './Location';
import appData from '../appData';
import classnames from 'classnames';

console.log(appData);

const days = [
    'Monday'
    , 'Tuesday'
    , 'Wednesday'
    , 'Thursday'
    , 'Friday'
    , 'Saturday'
    , 'Sunday'
]
const locationsByDay = _.map(days, day  => (
    {
        day
        // Find all locations with matching day
        , locations: _.filter(appData.locations, location => (
            // Find all sessions with a matching day
            _.filter(
                _.get(location, ['sessions'])
                , session => (
                    // Find all dates that match the day in question
                    _.filter(
                        _.get(session, 'dates')
                        , date => date.day === day
                    ).length > 0
                )
            ).length > 0
        ))
    }
));

class LocationsByTime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idx: 0
        };
    }

    render() {
        return (
            <div className='location-panel'>
                <div className='location-panel__days'>
                    {
                        _.map(
                            locationsByDay
                            , (locationByDay, idx) => (
                                <a
                                    key={idx}
                                    onClick={() => this.setState({idx})}
                                    className={
                                        classnames({
                                            'location-panel__day': true
                                            , 'location-panel__day--active': idx === this.state.idx
                                        })
                                    }
                                >
                                    <span className='location-panel__day-short'>{ locationByDay.day.charAt(0) }</span><span  className='location-panel__day-long'>{ locationByDay.day.substr(1)}</span>
                                </a>
                            )
                        )
                    }
                    <div style={{transform: `translateY(${100*this.state.idx}%)`}} className='location-panel__day  location-panel__day--background'>M</div>
                </div>
                <div className='location-panel__description-holder'>
                    <div className='location-panel__description-container'>
                        <div style={{transform: `translateY(-${100*this.state.idx/7}%)`}} className='location-panel__description-scroll'>
                            {
                                _.map(locationsByDay, (locationByDay, idx) => {
                                    return (
                                        <div key={idx} className='location-panel__description'>
                                            {
                                                locationByDay.locations.length ?
                                                    _.map(locationByDay.locations, (location, idx) => <Location  key={idx} {...location} />) :
                                                    <div>
                                                        Sorry, there are no classes on this day
                                                    </div>
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};


export default LocationsByTime;



