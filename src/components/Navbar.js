import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuTitle: 'Parks'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      menuTitle: this.state.menuTitle === 'Parks' ? 'Close' : 'Parks',
    });
  }

  closeMenu() {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false,
        menuTitle: 'Parks',
      });
    }
  }

  render() {
    const NavbarContainer = styled.div`
      background: black;
      display: flex;
      padding: 0 10px;
      align-items: center;
      > * {
        flex-grow: 1;
        flex-basis: 0;
      }
    `;

    const Logo = styled.img`
      height: 25px;
      flex-grow: 0;
      margin: 0 10px;
    `;

    const Title = styled.div`
      display: inline-block;
      position: relative;
      text-align: left;
      color: white;
      font-weight: bold;
    `;

    const MainLinks = styled.div`
      display: inline-block;
      position: relative;
      text-align: center;
      padding: 5px 0;
      flex-grow: 2;
      > * {
        color: white;
        padding: 5px 10px;
        margin: 0 3vw;
        &:hover {
          color: #ddd;
        }
      }
    `;

    const Dropdown = styled.div`
      display: inline-block;
      position: relative;
    `;

    const DropdownButton = styled.div`
      text-align: center;
      display: inline;
      padding: 5px 10px;
      cursor: pointer;
      color: white;
      float: right;
      &:hover {
        color: #ddd;
      }
    `;

    const DropdownContent = styled.div`
      display: ${ this.state.menuOpen ? 'inline-block' : 'none' }
      position: absolute;
      top: 29px;
      border: 1px solid black;
      right: -13px;
      > * {
        border: 1px solid black;
        background: #eee;
        padding: 5px 15px;
        margin: 0 auto;
        display: block;
        color: black;
        text-align: right;
        &:hover {
          background: #ddd;
        }
      }
    `;

    return (
      <NavbarContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/184px-US-NationalParkService-Logo.svg.png"></Logo>
        <Title>National Park App</Title>
        <MainLinks>
          <NavLink onClick={ this.closeMenu } to="/">Home</NavLink>
          <NavLink onClick={ this.closeMenu } to="/about">About</NavLink>
          <NavLink onClick={ this.closeMenu } to="/contact">Contact</NavLink>
        </MainLinks>
        <Dropdown>
          <DropdownButton onClick={ this.toggleMenu }>
            &#9776;&nbsp;{this.state.menuTitle}
          </DropdownButton>
          <DropdownContent>
            <NavLink onClick={ this.closeMenu } to="/parks/1">Yosemite</NavLink>
            <NavLink onClick={ this.closeMenu } to="/parks/2">Zion</NavLink>
            <NavLink onClick={ this.closeMenu } to="/parks/3">Big Bend</NavLink>
          </DropdownContent>
        </Dropdown>
      </NavbarContainer>
    );
  }
}

export default Navbar;
