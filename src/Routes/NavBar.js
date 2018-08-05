import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SunspearLogo from './../Assets/img/minified/logo.png';
import './../App.css';
import {LinkContainer} from "react-router-bootstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="light"
          light
          fixed="top"
          expand="md"
          id="navbar-style"
          className="navbar">
          <NavbarBrand id="nav-brand">
            <LinkContainer to="/">
              <img id="navbar-logo" src={SunspearLogo}/>
            </LinkContainer>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <LinkContainer to="/">
                <NavItem>
                  <NavLink
                    id="nav-item"
                    onClick={this.state.isOpen
                    ? this.toggle
                    : null}>Home</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/Immortal">
                <NavItem >
                  <NavLink
                    id="nav-item"
                    onClick={this.state.isOpen
                    ? this.toggle
                    : null}>IMMORTAL</NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/Team">
                <NavItem>
                  <NavLink
                    id="nav-item"
                    onClick={this.state.isOpen
                    ? this.toggle
                    : null}>Team</NavLink>
                </NavItem>
              </LinkContainer>
              <NavItem>
                <NavLink
                  data-scroll
                  id="nav-item"
                  href="./../App.js/#contact"
                  onClick={this.state.isOpen
                  ? this.toggle
                  : null}>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}