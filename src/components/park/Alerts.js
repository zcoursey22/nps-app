import React, { Component } from 'react';
import styled from 'styled-components';

class Alerts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const AlertsContainer = styled.div`
      flex-basis: 75%;
      > ul {
        padding-left: 26px;
        > li {
          padding: 5px;
          > p {
            font-size: 15px;
          }
        }
      }
    `;

    const alerts = this.props.park.alerts.map((alert) => {
      return (
        <li>
          <h4>{alert.title}</h4>
          <p>{alert.description}</p>
        </li>
      );
    });

    return (
      <AlertsContainer>
        <h3>Alerts</h3>
        <ul>{alerts}</ul>
      </AlertsContainer>
    );
  }
};

export default Alerts;
