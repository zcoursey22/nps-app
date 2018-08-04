import React, { Component } from 'react';
import styled from 'styled-components';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const AboutContainer = styled.div`
      > p {
        padding: 5px;
        font-size: 15px;
      }
    `;

    return (
      <AboutContainer>
        <h3>About</h3>
        <p>{this.props.park.description}</p>
        <p>{this.props.park.weatherInfo}</p>
        <p>{this.props.park.directionsInfo}</p>
      </AboutContainer>
    );
  }
};

export default About;
