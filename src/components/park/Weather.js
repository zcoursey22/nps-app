import React, { Component } from 'react';
import styled from 'styled-components';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sky: [],
      icon: '',
    };
  }

  componentDidMount() {
    this.setState({
      sky: this.generateSky(),
      icon: this.generateIcon(),
    });
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        sky: this.generateSky(),
        icon: this.generateIcon(),
      });
    }, 1000);
  }

  generateSky() {
    const hours = new Date().getHours();
    const weather = this.props.park.weather
    const condition = this.props.park.weather.conditions;
    if ((weather.max > 100 && weather.min > 85) || weather.temp > 95) {
      return (hours >= 20 || hours < 5 ? ['#100', '#900'] : ['#f54', '#d21']);
    }
    else if (condition === 'clear') {
      if (hours >= 22 || hours < 5) return ['#001', '#125'];
      if (hours >= 20) return ['#037', '#36a'];
      if (hours < 11) return ['#5af', '#a7b'];
      return ['#49f', '#38d'];
    } else {
      if (condition === 'partially cloudy') return (hours >= 20 || hours < 5 ? ['#001', '#245'] : ['#69e', '#58c']);
      if (condition === 'rainy') return (hours >= 20 || hours < 5 ? ['#012', '#345'] : ['#679', '#79b']);
      if (condition === 'snowy') return (hours >= 20 || hours < 5 ? ['#012', '#136'] : ['#48b', '#79c']);
      return (hours >= 20 || hours < 5 ? ['#012', '#245'] : ['#478', '#7ab']);
    }
  }

  generateIcon() {
    const hours = new Date().getHours();
    const condition = this.props.park.weather.conditions;
    if (condition === 'clear') {
      if (hours >= 20 || hours < 5) return 'https://image.flaticon.com/icons/svg/997/997096.svg';
      if (hours < 11) return 'https://image.flaticon.com/icons/svg/136/136734.svg';
      return 'https://image.flaticon.com/icons/svg/136/136723.svg';
    } else if (condition === 'partially cloudy') {
      if (hours >= 20 || hours < 5) return 'https://image.flaticon.com/icons/svg/414/414967.svg';
      return 'https://image.flaticon.com/icons/svg/136/136722.svg';
    } else {
      if (condition === 'rainy') return 'https://image.flaticon.com/icons/svg/826/826957.svg';
      if (condition === 'snowy') return 'https://image.flaticon.com/icons/svg/658/658690.svg';
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
