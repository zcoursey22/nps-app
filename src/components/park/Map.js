import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import styled from 'styled-components';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const MapContainer = styled.div`
      padding: 0 !important;
      width: 100%;
      display: flex;
      justify-content: center;
    `;

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: this.props.park.lat, lng: this.props.park.long } }
        defaultZoom = { 10 }
      >
      </GoogleMap>
   ));

    return (
      <MapContainer>
        <GoogleMapExample
          containerElement={ <div style={{ height: `40vw`, minHeight: '450px',  width: '80vw', padding: ' 25px 0' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </MapContainer>
    );
  }
};

export default Map;
