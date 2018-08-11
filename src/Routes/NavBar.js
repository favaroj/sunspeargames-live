import React, {Component} from 'react'
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
} from 'reactstrap'
import {BrowserRouter as Router, Route, Link, NavLink as RRNavLink} from 'react-router-dom'
import SunspearLogo from './../Assets/img/minified/logo.png'
import './../App.css'
import {LinkContainer} from 'react-router-bootstrap'
import $ from 'jquery'

export default class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this
      .toggle
      .bind(this)
    this.setActive = this.setActive.bind(this)

    this.state = {
      isOpen: false,
      streaming: false,
      homeColor: 'red',
      immortalColor: 'black',
      teamColor: 'black',
      consultingColor: 'black',
      contactColor: 'black'
    }

  }

  componentDidMount () {
    let that = this
    $.ajax({
      dataType: 'json',
      url: 'https://api.twitch.tv/kraken/streams/incontroltv/',
      headers: {
        'Client-ID': 'monns9nyrbwh9orasetxcm2tdzc7x5'
      },
      success: function (data) {
        if (data.status !== 404) {
          if (data.stream) {
            that.setState({
              streaming: true
            })
          }
        }
      }
    })

    $.ajax({
      dataType: 'json',
      url: 'https://api.twitch.tv/kraken/streams/jakataktv/',
      headers: {
        'Client-ID': 'monns9nyrbwh9orasetxcm2tdzc7x5'
      },
      success: function (data) {
        if (data.status !== 404) {
          if (data.stream) {
            that.setState({
              streaming: true
            })
          }
        }
      }
    })
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  setActive (Location) {
    switch (Location) {
      case 'Home':
        this.setState({
          homeColor: 'red',
          immortalColor: 'black',
          teamColor: 'black',
          consultingColor: 'black',
          contactColor: 'black'
        })
        break
      case 'Immortal':
        this.setState({
          homeColor: 'black',
          immortalColor: 'red',
          teamColor: 'black',
          consultingColor: 'black',
          contactColor: 'black'
        })
        break
      case 'Team':
        this.setState({
          homeColor: 'black',
          immortalColor: 'black',
          teamColor: 'red',
          consultingColor: 'black',
          contactColor: 'black'
        })
        break
      case 'Consulting':
        this.setState({
          homeColor: 'black',
          immortalColor: 'black',
          teamColor: 'black',
          consultingColor: 'red',
          contactColor: 'black'
        })
        break
      case 'Contact':
        this.setState({
          homeColor: 'black',
          immortalColor: 'black',
          teamColor: 'black',
          consultingColor: 'black',
          contactColor: 'red'
        })
        break
    }
  }
  static setLinksFromHome(Location) {

    switch (Location) {
      case 'Team':
        this.setState({
          homeColor: 'black',
          immortalColor: 'black',
          teamColor: 'red',
          consultingColor: 'black',
          contactColor: 'black'
        })
        break
      case 'Immortal':

        break
      case 'Consulting':
        this.setState({
          homeColor: 'black',
          immortalColor: 'black',
          teamColor: 'black',
          consultingColor: 'red',
          contactColor: 'black'
        })
        break
    }
  }
  render () {
    return (
      <div>
        <Navbar
          color='light'
          light
          fixed='top'
          expand='md'
          id='navbar-style'
          className='navbar'>
          <NavbarBrand id='nav-brand'>
            <LinkContainer to='/' onClick={() => this.setActive('Home')}>
              <img id='navbar-logo' src={SunspearLogo} />
            </LinkContainer>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <LinkContainer to='/' >
                <NavItem id='nav-item'>
                  <RRNavLink
                      exact={true}
                      to='/'
                      activeStyle={{color: 'red'}}
                      id="nav-link-style"
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Home
                  </RRNavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Immortal'>
                <NavItem id='nav-item'>
                  <RRNavLink
                      to='/Immortal'
                      activeStyle={{color: 'red'}}
                      id="nav-link-style"
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    IMMORTAL
                  </RRNavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Team'>
                <NavItem id="nav-item">
                  <RRNavLink
                      to='/Team'
                      activeStyle={{color: 'red'}}
                      id="nav-link-style"
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Team
                  </RRNavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Consulting'>
                <NavItem id='nav-item'>
                  <RRNavLink
                      to='/Consulting'
                      activeStyle={{color: 'red'}}
                      id="nav-link-style"
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Consulting
                  </RRNavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Contact'>
                <NavItem id='nav-item'>
                  <RRNavLink
                      to='/Contact'
                      activeStyle={{color: 'red'}}
                      id="nav-link-style"
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Contact
                  </RRNavLink>
                </NavItem>
              </LinkContainer>
              {/* {this.state.streaming ?
              <LinkContainer to="/Live">
              <NavItem>
                <NavLink
                  id="nav-item-live"
                  onClick={this.state.isOpen
                  ? this.toggle
                  : null}>Live!</NavLink>
              </NavItem>
            </LinkContainer>
            : null
            } */}

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
