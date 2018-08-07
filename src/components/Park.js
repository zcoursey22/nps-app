import React, { Component } from 'react';
import styled from 'styled-components';
import Banner from './park/Banner';
import About from './park/About';
import Weather from './park/Weather';
import Alerts from './park/Alerts';
import Map from './park/Map';
import parkData from '../sampleParkData';

class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: this.getPark(this.props.match.params.parkCode)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.parkCode !== this.props.match.params.parkCode) {
      this.setState({
        park: this.getPark(nextProps.match.params.parkCode)
      });
    }
  }

  getPark(parkCode) {
    for (var i = 0; i < parkData.length; i++) {
      if (parkData[i].parkCode === parkCode) return parkData[i];
    }
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
          <h2>{this.state.park.states.join(', ')}</h2>
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
