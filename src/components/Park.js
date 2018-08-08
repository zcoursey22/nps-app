import React, { Component } from 'react';
import styled from 'styled-components';
import Banner from './park/Banner';
import About from './park/About';
import Weather from './park/Weather';
import Alerts from './park/Alerts';
import Map from './park/Map';

import axios from 'axios';
import config from '../config';
import parkData from '../sampleParkData';

class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: parkData[0]
    };
  }

  componentWillMount() {
    this.getLivePark(this.props.match.params.parkCode);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.parkCode !== this.props.match.params.parkCode) {
      this.getLivePark(nextProps.match.params.parkCode)
    }
  }

  getPark(parkCode) {
    for (var i = 0; i < parkData.length; i++) {
      if (parkData[i].parkCode === parkCode) return parkData[i];
    }
  }

  getLivePark(parkCode) {
    const url = `https://api.nps.gov/api/v1/parks&parkCode=${parkCode}&api_key=${config.nps}`
    axios.get(url)
      .then(res => {
        const data = res.data.data[0];
        const park = {
          states: data.states.split(','),
          lat: Number(data.latLong.split(',')[0].slice(4)),
          long: Number(data.latLong.split(',')[1].slice(6)),
          description: data.description,
          designation: data.designation,
          parkCode: data.parkCode,
          id: data.id,
          directionsInfo: data.directionsInfo,
          directionsUrl: data.directionsUrl,
          fullName: data.fullName,
          url: "https://www.nps.gov/yose/index.htm",
          weatherInfo: data.weatherInfo,
          name: data.name,
          bannerImg: "",
          alerts: []
        }
        this.setState({
          park: park
        }, console.log(park));
      });
  }

  render() {
    const ParkContainer = styled.div`
      margin: 0 10vw;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      background: white;
      > div {
        padding: 15px;
        > h1 {
          font-family: 'Roboto', san-serif;
          font-size: 40px;
        }
        > h2 {
          font-size: 30px;
        }
        > h3 {
          font-size: 24px;
          padding: 5px;
        }
      }
    `;

    return (
      <ParkContainer>
        <div>
          <h1>{this.state.park.fullName}</h1>
          <h2>{this.state.park.states}</h2>
        </div>
        <Banner park={this.state.park}></Banner>
        <About park={this.state.park}></About>
        <Weather park={this.state.park}></Weather>
        <Alerts park={this.state.park}></Alerts>
        <Map park={this.state.park}></Map>
      </ParkContainer>
    );
  }
}

export default Park;
