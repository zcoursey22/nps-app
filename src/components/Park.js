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
      > div {
        margin: 15px 0;
        > h3 {
          padding-bottom: 5px;
        }
      }
    `;

    const About = styled.div`

    `;

    const Alerts = styled.div`
      > ul {
        padding-left: 21px;
      }
      > ul > li {
        padding-bottom: 10px;
      }
    `;

    const Weather = styled.div`
      > div {
        padding-bottom: 5px;
      }
    `;

    const alerts = this.state.park.alerts.map((alert) => {
      return (
        <li>
          <h4>{alert.title}</h4>
          <p>{alert.description}</p>
        </li>
      );
    });

    return (
      <ParkContainer id="park-container">
        <div>
          <h1>{this.state.park.fullName}</h1>
          <h2>{this.state.park.states}</h2>
        </div>
        <About>
          <h3>About</h3>
          <p>{this.state.park.description}</p>
        </About>
        <Alerts>
          <h3>Alerts</h3>
          <ul>{alerts}</ul>
        </Alerts>
        <Weather>
          <h3>Weather</h3>
          <div>
            <p>Temperature: {this.state.park.weather.temp}F</p>
            <p>Condition: {this.state.park.weather.conditions[0]}</p>
            <p>Max: {this.state.park.weather.max}F</p>
            <p>Min: {this.state.park.weather.min}F</p>
            <p>Precipitation: {this.state.park.weather.precipitation}%</p>
            <p>Humidity: {this.state.park.weather.humidity}%</p>
            <p>Wind: {this.state.park.weather.wind}mph</p>
          </div>
          <p>{this.state.park.weatherInfo}</p>
        </Weather>
        <div>
          <h3>Map</h3>
        </div>
        <div>
          <h3>Trails</h3>
        </div>
        <div>
          <h3>Nearby</h3>
        </div>
      </ParkContainer>
    );
  }
}

export default Park;
