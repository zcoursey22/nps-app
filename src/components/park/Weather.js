import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config.js';
import styled from 'styled-components';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sky: [],
      icon: '',
      weather: {
        weather: [{main: ''}],
        main: {temp: 75},
        wind: {speed: 0}
      }
    };
  }

  componentDidMount() {
    this.setState({
      sky: this.generateSky(),
      icon: this.generateIcon(),
    });
  }

  componentDidMount() {
    setInterval(this.getWeather(), 600000);
    setInterval(() => {
      this.setState({
        sky: this.generateSky(),
        icon: this.generateIcon(),
      });
    }, 100);
  }

  getWeather() {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.props.park.lat}&lon=${this.props.park.long}&APPID=${config.openWeatherMap}&units=imperial`;
    axios.get(url)
      .then(res => {
        this.setState({
          weather: res.data
        });
      });
  }

  generateSky() {
    const hours = new Date().getHours();
    const weather = this.state.weather.main;
    const condition = this.state.weather.weather[0].main;
    if ((weather.temp_max > 100 && weather.temp_min > 85) || weather.temp > 95) {
      return (hours >= 20 || hours < 5 ? ['#100', '#900'] : ['#f54', '#d21']);
    }
    else if (condition === 'Clear') {
      if (hours >= 20 || hours < 5) return ['#001', '#125'];
      // if (hours >= 20) return ['#037', '#36a'];
      if (hours < 11) return ['#5af', '#a7b'];
      return ['#49f', '#38d'];
    } else {
      if (condition === 'partially cloudy') return (hours >= 20 || hours < 5 ? ['#001', '#245'] : ['#69e', '#58c']);
      if (condition === 'Rain') return (hours >= 20 || hours < 5 ? ['#012', '#345'] : ['#679', '#79b']);
      if (condition === 'Snow') return (hours >= 20 || hours < 5 ? ['#012', '#136'] : ['#48b', '#79c']);
      return (hours >= 20 || hours < 5 ? ['#012', '#245'] : ['#478', '#7ab']);
    }
  }

  generateIcon() {
    const hours = new Date().getHours();
    const condition = this.state.weather.weather[0].main;
    if (condition === 'Clear') {
      if (hours >= 20 || hours < 5) return 'https://image.flaticon.com/icons/svg/997/997096.svg';
      if (hours < 11) return 'https://image.flaticon.com/icons/svg/136/136734.svg';
      return 'https://image.flaticon.com/icons/svg/136/136723.svg';
    } else if (condition === 'partially cloudy') {
      if (hours >= 20 || hours < 5) return 'https://image.flaticon.com/icons/svg/414/414967.svg';
      return 'https://image.flaticon.com/icons/svg/136/136722.svg';
    } else {
      if (condition === 'Rain') return 'https://image.flaticon.com/icons/svg/826/826957.svg';
      if (condition === 'Snow') return 'https://image.flaticon.com/icons/svg/658/658690.svg';
      return 'https://image.flaticon.com/icons/svg/136/136701.svg';
    }
  }

  render() {
    const WeatherContainer = styled.div`
      padding: 15px 0 !important;
      border: 1px solid #ddd;
      box-shadow: 2px 2px 4px 1px #bbb, -6px 2px 4px 1px #aaa;
      overflow: hidden;
      border-left: 0;
      flex-basis: 25%;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      background: linear-gradient(${this.state.sky[0]},${this.state.sky[1]});
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
        background: rgba(255,255,255,0.8);
        display: flex;
        justify-content: space-around;
        > span {
          font-size: 28px;
        }
        > #max {
          color: #3a3a3a;
        }
        > #min {
          color: #555;
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
          <img src={this.state.icon}/>
        </div>
        <div id="temp">
          <span>{Math.round(this.state.weather.main.temp)}&deg;</span>
        </div>
        <div id="max-min">
          <span id="max">{Math.round(this.state.weather.main.temp_max)}&deg;</span>
          <span id="min">{Math.round(this.state.weather.main.temp_min)}&deg;</span>
        </div>
        <div id="other-weather">
          <div>
            <img src="https://www.iconsdb.com/icons/preview/white/rain-xxl.png"/>
            <p>%</p>
          </div>
          <div>
            <img src="https://www.iconsdb.com/icons/preview/white/wind-turbine-xxl.png"/>
            <p>{Math.round(this.state.weather.wind.speed)}mph</p>
          </div>
        </div>
      </WeatherContainer>
    );
  }
}

export default Weather;
