import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Park from './components/Park';

import parkData from './sampleParkData';

const Body = styled.div`
  margin-top: 38px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: parkData
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar parks={this.state.parks}/>
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
