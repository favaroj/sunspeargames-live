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
import $ from 'jquery';
import {LinkContainer} from "react-router-bootstrap";
//import './../Assets/js/scroll.js';

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

  Alert() {
    console.log("Immortal Clicked!")
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
            <NavbarBrand href="./../App.js/#home"><img id="navbar-logo" src={SunspearLogo}/></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>

                  <NavLink
                    id="nav-item"
                    onClick={this.state.isOpen
                    ? this.toggle
                    : null}>Home</NavLink>

                </NavItem>

                <NavItem>
                  <NavLink onClick={this.Alert.bind(this)}>
                  <Link to="/Immortal" >IMMORTAL {/*<NavLink

                    id="nav-item"

                    onClick={this.state.isOpen
                    ? this.toggle
                    : null}>IMMORTAL</NavLink>*/}
                  </Link>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    data-scroll
                    id="nav-item"
                    href="./../Assets/pages/team.html"
                    onClick={this.state.isOpen
                    ? this.toggle
                    : null}>Team</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-scroll
                    id="nav-item"
                    href="./../App.js/#contact"
                    onClick={this.state.isOpen
                    ? this.toggle
                    : null}>Contact</NavLink>
                </NavItem>
                {/*}
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#IMMORTAL">
                    <span>IMMORTAL</span>
                  </a>
                </li>
                <li>
                  <a href="../pages/team.html">
                    <span>Team</span>
                  </a>
                </li>
                <li>
                  <a href="#live">
                    <span>Live</span>
                  </a>
                </li>
                <li>
                  <a href="../pages/team.html">
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span>Contact</span>
                  </a>
                </li>

                onClick={this.state.isOpen
                  ? this.toggle
                  : null}*/}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    )
  }
}