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
      park: parkData[this.props.match.params.parkCode - 1],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.parkCode !== this.props.match.params.parkCode) {
      this.setState({
        park: parkData[nextProps.match.params.parkCode - 1],
      });
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
        > h3 {
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
