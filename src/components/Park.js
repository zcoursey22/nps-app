import React, { Component } from 'react';
import styled from 'styled-components';
import parkData from '../sampleParkData';

class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      park: parkData[this.props.match.params.parkCode - 1],
    };
  }

  componentWillReceiveProps(nextProps) {  // when props change!
    if (nextProps.match.params.parkCode !== this.props.match.params.parkCode) {
      this.setState({
        park: parkData[nextProps.match.params.parkCode - 1],
      });
    }
  }

  render() {
    const ParkContainer = styled.div`
      margin: 10px 10vw;
      > div {
        margin: 10px 0;
      }
    `;

    return (
      <ParkContainer>
        <div>
          <h1>{this.state.park.name} National Park</h1>
          <h2>{this.state.park.states}</h2>
        </div>
        <div>
          <p>{this.state.park.desc}</p>
        </div>
        <div>
          Weather
        </div>
        <div>
          Map
        </div>
        <div>
          Trails
        </div>
        <div>
          Nearby
        </div>
      </ParkContainer>
    );
  }
}

export default Park;
