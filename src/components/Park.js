import React from 'react';

const Park = ({ match }) => {
  return (
    <div id="container">
      <div id="header">
        <h3>Header</h3>
        <h1>Name</h1>
        <h2>Location</h2>
      </div>
      <div id="info">
        <h3>Information</h3>
        <p>this is park {match.params.parkCode}</p>
      </div>
      <div id="weather">
        <h3>Weather</h3>
      </div>
      <div id="map">
        <h3>Map</h3>
      </div>
      <div id="trails">
        <h3>Trails</h3>
      </div>
      <div id="nearby">
        <h3>Nearby</h3>
      </div>
    </div>
  );
}

export default Park;
