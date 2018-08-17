import React, {Component} from 'react'
import SunspearGoldLogo from './../Assets/img/minified/sunspear-logo-gold-trans-large-min.PNG'
import NavBar from './NavBar'
import Banner from './../Components/Banner'
import Footer from './../Components/Footer'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import './../Assets/css/font-awesome.min.css'
import './../App.css'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return (
      <div className='App'>
        <Banner />
        <div
          id='home'
          className='home anti-shadow home-main-content parallax-window-talmetra'
          data-parallax='scroll'
          data-image-src=''
          data-z-index='2'>
          <div>
            <div className='sections set-zindex-top '>
              <div className='fluid-container text-center set-zindex-top' />
            </div>
          </div>
        </div>

        <section id='about' className='fluid-container home-content-logo-container'>
          <div className='row'>
            <div className='col-md-4 padding30'>
              <div className='about-photo'>
                <img
                  src={SunspearGoldLogo}
                  alt='SunSpear Games'
                  style={{
                    width: '65%',
                    marginRight: '97.5%'
                  }} />
              </div>
            </div>
            <div>
              <div>
                <p className='home-content-text'>Better games. Better communities.</p>
                <p className='home-content-text'>By design.</p>
              </div>
            </div>
          </div>
        </section>

        <section id='index-learn-more' className='learn-more'>
          <div className='overlay sections-quotes anti-shadow'>
            <ScrollAnimation animateIn='fadeInRight'>
              <NavLink to='/Team' activeStyle={{color: 'red'}}>
                <div className='dot-div'>
                  <p className='dot-text'>TEAM</p>
                </div>
              </NavLink>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInRight'>
              <NavLink to='/Immortal' activeStyle={{color: 'red'}}>
                <div className='dot-div' onClick={NavBar.setLinksFromHome.bind(this, 'Immortal')}>
                  <p className='dot-text'>IMMORTAL</p>
                </div>
              </NavLink>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight'>
              <NavLink to='/Consulting' activeStyle={{color: 'red'}}>
                <div className='dot-div'>
                  <p className='dot-text'>CONSULTING</p>
                </div>
              </NavLink>
            </ScrollAnimation>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Home
