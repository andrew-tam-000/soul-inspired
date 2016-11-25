import React, {Component} from 'react';
import appData from '../appData';
import Promise from 'bluebird';
import GoogleMapsLoader from 'google-maps';
GoogleMapsLoader.KEY = 'AIzaSyBTa5G-4yDwP6NBrDYtHrGx4xidUcsMIv0';

function geoCodeAddress(geocoder, address) {
    // return a Promise
    return new Promise(function(resolve,reject) {
        geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                // resolve results upon a successful status
                resolve(results);
            } else {
                // reject status upon un-successful status
                reject(status);
            }
        });
    });
}
function GoogleMapSupplier(Wrapped) {
    return class GoogleMapSupplier extends Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        render() {
            return ( this.state.google ? <Wrapped google={this.state.google}/> : null );
        }

        componentDidMount() {
            GoogleMapsLoader.load( google => {
                this.setState({google});
            })
        }
    }
}

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.map = null;
    }

    render() {
        return (
            <div className='map'>
                <ul style={{ position: 'absolute', width: '50%'}} className='map__list'>
                    {
                        _.map(this.state.list, (location, idx) => {
                            return (
                                <li
                                    onClick={
                                        this.zoomIntoMarker.bind(this, this.state.markers[idx])
                                    }
                                    key={location.label}
                                    className='map__list-item'
                                >
                                    <a href='#'>{location.label} {location.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div ref='map__google' className='map__google'/>
                <a href='#' onClick={this.centerAroundMarkers.bind(this, this.state.markers)} className='map__show-all'>
                    Show All
                </a>
            </div>
        );
    }

    zoomIntoMarker(marker) {
        this.map.setZoom(16);
        this.map.panTo(marker.position);
    }


    centerAroundMarkers(markers) {
        let bounds = new this.props.google.maps.LatLngBounds();

        _.forEach(markers, marker => {
            bounds.extend(marker.position);
        });

        this.map.setZoom(10);
        this.map.fitBounds(bounds);
    }


    componentDidMount() {

        let geocoder = new this.props.google.maps.Geocoder();
        let addresses = _.map(appData.locations, location => location.address.replace(/  +/g, ' '));

        let myOptions = {
            zoom: 10,
            //center: addressObjs[0][0].geometry.location,
            mapTypeId: this.props.google.maps.MapTypeId.ROADMAP
        };

        this.map = new this.props.google.maps.Map(this.refs.map__google, myOptions);

        Promise
            .map(addresses, (address) => geoCodeAddress(geocoder, address))
            .then( addressObjs => {

                // Empty out list
                this.setState({
                    list: []
                    , markers: []
                });

                _.forEach(addressObjs, (address, idx)  => {
                    let label = String.fromCharCode("A".charCodeAt(0) + idx);

                    let position = address[0].geometry.location;

                    let name = address[0].formatted_address;

                    let marker = new this.props.google.maps.Marker({
                        map: this.map
                        , position
                        , label

                    });

                    this.setState({
                        list: this.state.list.concat({
                            name
                            , label
                        })
                        , markers: this.state.markers.concat(marker)
                    })
                });

                this.centerAroundMarkers(this.state.markers);
            })
        ;
    }
}

export default GoogleMapSupplier(Map);


