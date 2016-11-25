import React, {Component} from 'react';
import _ from 'lodash';
import classnames from 'classnames';

export default function Filter({ list, activeFilter, onClick}) {
    return (
        <ul className='filter'>
            {
                _.map(
                    list
                    , filterItem => (
                        <li
                            key={filterItem.toLowerCase()}
                            className={
                                classnames({
                                    'filter__item': true
                                    , 'filter__item--active': filterItem.toLowerCase() === activeFilter
                                })
                            }
                            onClick={onClick.bind(null, filterItem.toLowerCase())}
                        >
                                <a className='filter__item-name'>{filterItem}</a>
                        </li>
                    )
                )
            }
            <li
                style={{
                    width: `${100/list.length}%`
                    , transform: `translateX( ${ 100*_.indexOf(_.map(list, item => item.toLowerCase()), activeFilter) }%)`
                }}
                className='filter__item  filter__item--background'
            />
        </ul>
    );
};
