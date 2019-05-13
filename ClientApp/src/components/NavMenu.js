import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import { userActions } from '../authentication';

export class NavMenu extends Component {
  displayName = NavMenu.name

  handleClick(event) {
    userActions.logout();
  }
  
  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>CryptocurrencyTracker</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/statistics'}>
              <NavItem>
                <Glyphicon glyph='stats' /> Statistics
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/investments'}>
              <NavItem>
                <Glyphicon glyph='bitcoin' /> Investments
              </NavItem>
            </LinkContainer>
            <NavItem onClick={this.handleClick.bind(this)}>
              <Glyphicon glyph='off' /> Log out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
