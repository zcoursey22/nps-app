import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  handleClickOutside(e) {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false,
      });
    }
  }

  render() {
    const Dropdown = styled.div`
      float: right;
      display: inline-block;
    `;

    const DropdownContent = styled.div`
      display: ${ this.state.menuOpen ? 'block' : 'none' }
      > * {
        display: block;
      }
    `;

    return (
      <div>
        <span>NPS App</span>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Dropdown onClick={ this.toggleMenu.bind(this) }>
          Parks
          <DropdownContent>
            <NavLink to="/parks/1">1</NavLink>
            <NavLink to="/parks/2">2</NavLink>
            <NavLink to="/parks/3">3</NavLink>
          </DropdownContent>
        </Dropdown>
      </div>
    );
  }
}

export default onClickOutside(Navbar);
