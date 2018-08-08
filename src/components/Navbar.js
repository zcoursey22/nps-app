import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuTitle: 'Parks',
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  closeMenu() {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false
      });
    }
  }

  render() {
    const NavbarContainer = styled.div`
      background: black;
      display: flex;
      top: 0;
      height: 40px;
      position: fixed;
      width: 100%;
      padding: 3px 10px;
      align-items: center;
      border-bottom: 1px solid #ddd;
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
      line-height: 10px;
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
      top: 29.5px;
      right: -13px;
      border-top: 1px solid #ddd;
      border-bottom-left-radius: 50px;
      max-height: 36.25vh;
      overflow-y: scroll;
      border-left: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      > * {
        border-bottom: 1px solid #ddd;
        border-top: 0;
        background: white;
        padding: 5px 25px;
        margin: 0 auto;
        display: block;
        color: black;
        text-align: right;
        &:hover {
          background: #f7f7f7;
        }
        &:last-child {
          border-bottom-left-radius: 50px;
        }
      }
    `;

    let menu = null;
    if (!this.state.menuOpen) {
      menu = <span>&#9776; Parks</span>
    } else {
      menu = <span>&#x2715; Parks</span>
    }

    const parks = this.props.parks.map((park, i) => {
      return (
        <NavLink onClick={ () => {this.closeMenu(); window.scrollTo(0, 0);} } to={`/parks/${park.parkCode}`}>{park.name}</NavLink>
      );
    });

    return (
      <NavbarContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/184px-US-NationalParkService-Logo.svg.png"></Logo>
        <Title>National Park App</Title>
        <MainLinks>
          <NavLink onClick={ () => {this.closeMenu(); window.scrollTo(0, 0);} } to="/">Home</NavLink>
          <NavLink onClick={ () => {this.closeMenu(); window.scrollTo(0, 0);} } to="/about">About</NavLink>
          <NavLink onClick={ () => {this.closeMenu(); window.scrollTo(0, 0);} } to="/contact">Contact</NavLink>
        </MainLinks>
        <Dropdown>
          <DropdownButton onClick={ this.toggleMenu }>
            {menu}
          </DropdownButton>
          <DropdownContent>
            {parks}
          </DropdownContent>
        </Dropdown>
      </NavbarContainer>
    );
  }
}

export default Navbar;
