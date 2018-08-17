import React, { Component } from 'react'
// import Fireworks from 'fireworks-canvas';
import './../../node_modules/font-awesome/css/font-awesome.min.css'
import './../App.css'
import './../Assets/js/scroll.js'

export default class Footer extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  componentDidMount () {
    // const container = document.getElementById('fireworks-container')
    // const options = {
    //   maxRockets: 3,            // max # of rockets to spawn
    //   rocketSpawnInterval: 1550, // millisends to check if new rockets should spawn
    //   numParticles: 100,        // number of particles to spawn when rocket explodes (+0-10)
    //   explosionMinHeight: 0.2,  // percentage. min height at which rockets can explode
    //   explosionMaxHeight: 0.9,  // percentage. max height before a particle is exploded
    //   explosionChance: 0.08     // chance in each tick the rocket will explode
    // }

    // // instantiate the class and call start
    // // this returns a disposable - calling it will stop fireworks.
    // const fireworks = new Fireworks(container, options)
    // const stop = fireworks.start()
  }

  render () {
    return (
      <div className='App'>
        <footer id='fireworks-container' className='footer' style={{zIndex: '0', position: 'absolute', width: '100%'}}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='main-footer'>
                  <div className='social'>
                    <a href='https://www.facebook.com/sunspeargames/' target='_blank'>
                      <i className='fa fa-facebook' /></a>
                    <a href='https://www.linkedin.com/company/sunspear-games/' target='_blank'>
                      <i className='fa fa-linkedin end' target='_blank' />
                    </a>
                  </div>
                  <p>Better games. Better communities. By design.</p>
              &copy; 2018
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
