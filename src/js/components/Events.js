import React, {Component} from 'react';
import Filter from './Filter';
import _ from 'lodash';
import Section from './Section';



const eventData = [
    {
        title: 'Test One'
        , subtitle: 'Test ASubtitle'
        , image: '/images/logo.svg'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
    }
];

const EventItem = ({title, subtitle, image}) => {
    return (
        <div className='event-item'>
            <div className='event-item__image-holder'>
                <img src={image} className='event-item__image'/>
            </div>
            <div className='event-item__content'>
                <div className='event-item__headline'>
                    { title }
                </div>
                <div className='event-item__subtitle'>
                    { subtitle }
                </div>
            </div>
        </div>
    );
};

class Events extends Component {
    render() {
        return (
            <Section
                className='events'
                title='Watch us perform!'
                description='We are a group of soul/urban line dancers based in the SF Bay Are'
            >
                <Filter
                    list={['Upcoming', 'Past', 'All']}
                    activeFilter={'upcoming'}
                    onClick={ filterItem => this.setState({filter: filterItem}) }
                />
                <div className='events__list'>
                    { _.map(eventData, event => <EventItem {...event}/>) }
                </div>
            </Section>
        );
    }
}

export default Events;
