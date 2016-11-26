import React, {Component} from 'react';
import Section from './Section';
import ListItem from './ListItem';
import appData from '../appData';
import _ from 'lodash';


class Contact extends Component {
    render() {
        return (
            <Section
                title='Contact us for more information'
                className='contact'
            >
                <div className='contact__list'>
                    {
                        _.map(
                            appData.contacts, contact => (
                                <ListItem
                                    rowData={[
                                        [
                                            contact.name
                                            , 'Title'
                                        ]
                                        , [
                                            contact.email
                                            , contact.phone
                                        ]
                                    ]}
                                    image={contact.image}
                                    extra={contact.description}
                                />
                            )
                        )
                    }
                </div>
            </Section>
        );
    }
}

export default Contact;
