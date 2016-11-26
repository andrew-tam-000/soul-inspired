import React, {Component} from 'react';
import Filter from './Filter';
import _ from 'lodash';
import Section from './Section';
import ListItem from './ListItem';



const eventData = [
    {
        title: 'Test One'
        , subtitle: 'Test ASubtitle'
        , image: '/images/logo.svg'
        , type: 'upcoming'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
        , type: 'upcoming'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
        , type: 'past'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
        , type: 'past'
    }
    , {
        title: 'Test Two'
        , subtitle: 'Test TRhee'
        , image: '/images/logo.svg'
        , type: 'past'
    }
];

class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'upcoming'
        }
    }

    render() {
        return (
            <Section
                className='events'
                title='Watch us perform!'
                description='We are a group of soul/urban line dancers based in the SF Bay Are'
            >
                <Filter
                    list={['Upcoming', 'Past', 'All']}
                    activeFilter={this.state.filter}
                    onClick={ filterItem => this.setState({filter: filterItem}) }
                />
                <div className='events__list'>
                    { _.map(
                        (this.state.filter === 'all' ? eventData : _.filter(eventData, event => event.type === this.state.filter ))
                        , (event, idx) => (
                            <ListItem
                                key={idx}
                                image={event.image}
                                rowData={[
                                    [
                                        event.title
                                    ]
                                    , 
                                    [
                                        event.subtitle
                                    ]
                                ]}
                           />
                        )
                    )}
                </div>
            </Section>
        );
    }
}

export default Events;
