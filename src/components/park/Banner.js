import React, { Component } from 'react';
import styled from 'styled-components';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const BannerContainer = styled.div`
      background-image: url(${this.props.park.bannerImg});
      width: 100%;
      height: 20vw;
      max-height: 300px;
      background-size: cover;
    `;

    return (
      <BannerContainer></BannerContainer>
    );
  }
};

export default Banner;
