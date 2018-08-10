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
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
                <NavItem onClick={() => this.setActive('Home')}>
                  <NavLink
                    id='nav-item'
                    style={{color: this.state.homeColor}}
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Home
                  </NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Immortal'>
                <NavItem onClick={() => this.setActive('Immortal')}>
                  <NavLink
                    id='nav-item'
                    style={{color: this.state.immortalColor}}
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    IMMORTAL
                  </NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Team'>
                <NavItem onClick={() => this.setActive('Team')}>
                  <NavLink
                    id='nav-item'
                    style={{color: this.state.teamColor}}
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Team
                  </NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Consulting'>
                <NavItem onClick={() => this.setActive('Consulting')}>
                  <NavLink
                    id='nav-item'
                    style={{color: this.state.consultingColor}}
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Consulting
                  </NavLink>
                </NavItem>
              </LinkContainer>
              <LinkContainer to='/Contact'>
                <NavItem onClick={() => this.setActive('Contact')}>
                  <NavLink
                    id='nav-item'
                    style={{color: this.state.contactColor}}
                    onClick={this.state.isOpen
                      ? this.toggle
                      : null}>
                    Contact
                  </NavLink>
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
