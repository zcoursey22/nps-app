import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuTitle: 'Menu'
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      menuTitle: this.state.menuTitle === 'Menu' ? 'Close' : 'Menu',
    });
  }

  closeMenu() {
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false,
        menuTitle: 'Menu',
      });
    }
  }

  render() {
    const NavbarContainer = styled.div`
      background: #eee;
      display: flex;
      padding: 10px 15px;
      > * {
        flex-grow: 1;
      }
    `;

    const Title = styled.div`
      display: inline-block;
      text-align: center;
    `;

    const MainLinks = styled.div`
      display: inline-block;
      text-align: center;
      > * {
        padding: 0 25px;
      }
    `;

    const Dropdown = styled.div`
      display: inline-block;
    `;

    const DropdownButton = styled.div`
      text-align: center;
    `;

    const DropdownContent = styled.div`
      display: ${ this.state.menuOpen ? 'inline-block' : 'none' }
      > * {
        display: block;
      }
    `;

    return (
      <NavbarContainer>
        <Title>NPS App</Title>
        <MainLinks>
          <NavLink onClick={ this.closeMenu } to="/">Home</NavLink>
          <NavLink onClick={ this.closeMenu } to="/about">About</NavLink>
          <NavLink onClick={ this.closeMenu } to="/contact">Contact</NavLink>
        </MainLinks>
        <Dropdown>
          <DropdownButton onClick={ this.toggleMenu }>
            {this.state.menuTitle}
          </DropdownButton>
          <DropdownContent>
            <NavLink onClick={ this.closeMenu } to="/parks/1">Park 1</NavLink>
            <NavLink onClick={ this.closeMenu } to="/parks/2">Park 2</NavLink>
            <NavLink onClick={ this.closeMenu } to="/parks/3">Park 3</NavLink>
          </DropdownContent>
        </Dropdown>
      </NavbarContainer>
    );
  }
}

export default Navbar;
