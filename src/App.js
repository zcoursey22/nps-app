import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Park from './components/Park';

import config from './config'
import parkData from './sampleParkData';

const Body = styled.div`
  margin-top: 38px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: parkData,
      liveParks: []
    };
  }

  componentWillMount() {
    this.getParks();
  }

  getParks() {
    const url = `https://api.nps.gov/api/v1/parks&limit=550&api_key=${config.nps}`
    axios.get(url)
      .then(res => {
        let parks = [];
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].designation === 'National Park') {
            parks.push(res.data.data[i]);
          };
        };
        this.setState({
          liveParks: parks
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar parks={this.state.liveParks}/>
          <Body>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/parks/:parkCode" render={(props) => <Park {...props} />}/>
              <Route component={Error} />
            </Switch>
          </Body>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
