import _ from 'lodash';

const locations = [
    {
        name: 'Covenant Presbyterian Church'
        , address: '321 Taraval St., San Francisco'
        , sessions: [
            {
                instructors: [
                    'Al Kitashima'
                    , 'Dar Masamori'
                ]
                , dates: [
                    {
                        day: 'Tuesday'
                        , start: '7:30am'
                        , end: '9:00pm'
                    }
                    , {
                        day: 'Saturday'
                        , start: '10:00am'
                        , end: '12:00pm'
                    }
                ]
            }
        ]
        , map: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284'
        , fees: [
            {
                cost: 5
                , description: 'session'
            }
        ]
    }
    , {
        name: 'JCCCNC (Gymnasium)'
        , address: '1840 Sutter St., San Francisco'
        , sessions: [
            {
                instructors: [
                    'Al Kitashima'
                    , 'Dar Masamori'
                ]
                , dates: [
                    {
                        day: 'Tuesday'
                        , start: '1:15pm'
                        , end: '2:45pm'
                    }
                    , {
                        day: 'Friday'
                        , start: '1:15pm'
                        , end: '2:45pm'
                    }
                ]
            }
        ]
        , map: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284'
        , fees: [
            {
                cost: 3
                , description: 'session (members)'
            }
            , {
                cost: 4
                , description: 'session (non-members)'
            }
        ]
    }
    , {
        name: 'Westlake Doelger Center (Larcombe Room)'
        , address: '101 Lake Merced, Daly City'
        , sessions: [
            {
                instructors: [
                    'Novella "NoNo" Peterson'
                ]
                , dates: [
                    {
                        day: 'Wednesday'
                        , start: '6:00pm'
                        , end: '8:00pm'
                    }
                ]
            }
            , {
                instructors: [
                    'Marlene Bazdarich'
                ]
                , dates: [
                    {
                        day: 'Monday'
                        , start: '7:00pm'
                        , end: '8:30pm'
                    }
                ]
            }
        ]
        , map: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284'
        , fees: [
            {
                cost: 4
                , description: 'session'
            }
        ]
    }
    , {
        name: 'Westlake Doelger Center (Multi-Purpose Room [with CC Brown])'
        , address: '101 Lake Merced, Daly City'
        , sessions: [
            {
                instructors: [
                    'Novella "NoNo" Peterson'
                ]
                , dates: [
                    {
                        day: 'Saturday'
                        , start: '10:00am'
                        , end: '12:00pm'
                    }
                ]
            }
        ]
        , map: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284'
    }
    , {
        name: 'Highlands Recreation (Gymnasium)'
        , address: '1851 Lexington Ave., San Mateo'
        , sessions: [
            {
                instructors: [
                    'Darlene Masamori'
                ]
                , dates: [
                    {
                        day: 'Wednesday'
                        , start: '7:00pm'
                        , end: '8:00pm'
                    }
                ]
            }
        ]
        , map: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284'
        , fees: [
            {
                cost: 5
                , description: 'session'
            }
            , {
                cost: 45
                , description: '10-week session'
            }
        ]
    }
    , {
        name: 'Joseph Lee Recreation Center'
        , address: '1395 Mendell St., San Francisco, CA 94124'
        , sessions: [
            {
                instructors: [
                    'Gladys "Pebbles" White'
                ]
                , dates: [
                    {
                        day: 'Saturday'
                        , start: '12:30pm'
                        , end: '2:30pm'
                    }
                ]
            }
        ]
        , map: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284'
    }
    , {
        name: 'War Memorial Community Center (Upper Gym)'
        , address: '6655 Mission St., Daly City'
        , sessions: [
            {
                instructors: [
                    'Gladys "Pebbles" White'
                ]
                , dates: [
                    {
                        day: 'Monday'
                        , start: '12:30pm'
                        , end: '2:30pm'
                        , extra: 'beginner'
                    }
                    , {
                        day: 'Tuesday'
                        , start: '11:30am'
                        , end: '1:30pm'
                        , extra: 'intermediate'
                    }
                ]
            }
        ]
        , map: 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284'
    }
];


const nav = _.map(['About', 'Events', 'Classes', 'Contact'], title => ({title, link: '/'+title.toLowerCase()}));

const contacts = [
    {
        name: 'Test Name'
        , email: 'xxx@yyy.zzz'
        , phone: '123-1234'
        , image: '/images/logo.svg'
        , description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
    }
    , {
        name: 'Test Name'
        , email: 'xxx@yyy.zzz'
        , phone: '123-1234'
        , image: '/images/logo.svg'
        , description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
    }
    , {
        name: 'Test Name'
        , email: 'xxx@yyy.zzz'
        , phone: '123-1234'
        , image: '/images/logo.svg'
        , description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
    }
];


export default {
    locations
    , nav
    , contacts
};
