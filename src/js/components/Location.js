import React, { Component } from 'react';
import _ from 'lodash';

class Location extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAnimating: false
            , open: false
        }
    }

    render() {
        return (

            <div className='location'>
                <div className='location__name'>
                    {this.props.name}
                </div>
                {/* <img className='location__image' src={this.props.map}/> */}

                <div className='location__address'>
                    {this.props.address}
                </div>

                <div className='location__details'>

                    <div className='location__left'>

                        {_.map(this.props.sessions, (session,idx) => {
                            return (
                                <div key={idx} className='location__group'>
                                    {locationInstructors(session.instructors)}
                                    {locationDates(session.dates)}
                                </div>
                            )
                        })}

                    </div>

                    <div className='location__right'>
                        {locationFees(this.props.fees)}
                    </div>
                </div>
            </div>
        );
    }
}

function locationFees(fees) {
    return (
        <ul className='location__fees'>
            { _.map(fees, ( fee, idx) => <li key={idx}>${fee.cost}/{fee.description}</li> )}
        </ul>
    );
}

function locationInstructors(instructors) {

    // Handle one
    let instructorString = _.join(instructors, '');

    // Handle none
    if ( !instructorString ) {
        return;
    }

    // Handle more than one
    if ( instructors.length > 1 ) {
        let commaList = instructors;
        let andList = commaList.pop();

        instructorString = [commaList.join(', '), andList].join(' and ');
    }


    return (
        <div className='location__instructor'>
            {instructorString}
        </div>
    );
}

function locationDates(dates) {

    return (
        <ul className='location__dates'>
            { dates.map( date =>  <li key={date.day}>{constructSchedule(date)}</li> ) }
        </ul>
    );

    function constructSchedule({day, start, end, extra}) {
        let schedule = `${day}s @ ${start}-${end}`;
        if ( extra ) {
            schedule = `${schedule} (${extra})`;
        }
        return schedule;
    }
}


export default Location;
