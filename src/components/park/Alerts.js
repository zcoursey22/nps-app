import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from './alerts/Alert';

class Alerts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const AlertsContainer = styled.div`
      flex-basis: 75%;
      > ul {
        list-style: none;
      }
    `;

    const alerts = this.props.park.alerts.map((alert) => <Alert alert={alert} />);

    return (
      <AlertsContainer>
        <h3>Alerts</h3>
        <ul>{alerts}</ul>
      </AlertsContainer>
    );
  }
};

export default Alerts;
