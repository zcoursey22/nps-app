import React, { Component } from 'react';
import styled from 'styled-components';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const WeatherContainer = styled.div`
      padding: 15px 0 !important;
      border: 4px solid black;
      border-left: 0;
      flex-basis: 25%;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      // background: linear-gradient(#f54, #d21); // red
      // background: linear-gradient(#38f, #05c); // blue
      // day colors
      // background: linear-gradient(#7ab, #478); // rainy
      background: linear-gradient(#012, #135); // night
      border-radius: 0 50% 30% 0;
      > div {
        padding: 5px 0;
      }
      > #weather-icon {
        flex-shrink: 1;
        > img {
          height: 115px;
        }
      }
      > #temp {
        display: flex;
        align-items: center;
        font-size: 60px;
        flex-shrink: 1;
        > span {
          color: white;
        }
      }
      > #max-min {
        width: 100%;
        text-align: center;
        flex-shrink: 1;
        // background: rgba(0,0,0,0.4); // day
        background: rgba(255,255,255,0.8); // night
        > span {
          padding: 0 10px;
          font-size: 28px;
        }
        > #max {
          // color: white; // day
          color: black; // night
        }
        > #min {
          // color: #eaeaea; // day
          color: #3a3a3a; // night
        }
      }
      > #other-weather {
        padding: 10px 0;
        flex-shrink: 1;
        width: 80%;
        display: flex;
        > div {
          flex-grow: 1;
          flex-basis: 0;
          text-align: center;
          > p {
            color: white;
            font-size: 20px;
          }
          > img {
            padding: 10
            width: 60px;
          }
        }
      }
    `;

    return (
      <WeatherContainer>
        <div id="weather-icon">
          <img src="https://image.flaticon.com/icons/png/512/124/124556.png"/>
        </div>
        <div id="temp">
          <span>{this.props.park.weather.temp}&deg;</span>
        </div>
        <div id="max-min">
          <span id="max">{this.props.park.weather.max}&deg;</span>
          <span id="min">{this.props.park.weather.min}&deg;</span>
        </div>
        <div id="other-weather">
          <div>
            <img src="https://www.iconsdb.com/icons/preview/white/rain-xxl.png"/>
            <p>{this.props.park.weather.precipitation}%</p>
          </div>
          <div>
            <img src="https://www.iconsdb.com/icons/preview/white/wind-turbine-xxl.png"/>
            <p>{this.props.park.weather.wind}mph</p>
          </div>
        </div>
      </WeatherContainer>
    );
  }
}

export default Weather;
