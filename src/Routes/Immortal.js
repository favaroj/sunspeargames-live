import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {NavLink} from 'react-router-dom'
import SunspearGoldLogo from './../Assets/img/minified/sunspear-logo-gold-trans-large-min.PNG'
import ArashOfDeliverance from './../Assets/img/minified/arash-of-deliverance-trans.png'
import Bloodbound from './../Assets/img/minified/Bloodbound-Semibright-nobg.png'
import IanImage from './../Assets/img/minified/ian2.png'
import DylanImage from './../Assets/img/minified/dylan.png'
import Header from './../Components/Header'
import SplashRootWitch from './../Components/SplashRootWitch'
import HerleshFaction from './../Components/HerleshFaction'
import Icon from 'react-icons-kit'
import {close} from 'react-icons-kit/fa/close'
import Footer from './../Components/Footer'
import './../Assets/css/font-awesome.min.css'
import './../App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showSubscriptionModal: false,
      subscribeBtnClass: 'subscribe-button',
      subscriptionEmail: '',
      emailValidated: false
    }
    this.handleShowSubscriptionModal = this.handleShowSubscriptionModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.handleSubscribePress = this.handleSubscribePress.bind(this)
  }
  componentDidMount () {

  }

  handleShowSubscriptionModal () {
	  this.setState({
      showSubscriptionModal: !this.state.showSubscriptionModal,
      subscriptionEmail: ''
    })
  }

  handleSubscribePress() {
    if(this.state.emailValidated) {
      alert("Subscribed!")
    }
  }

  validateEmail(email) {
    var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var testResult = emailTest.test(String(email).toLowerCase())
    if (testResult) {
      this.setState({
        subscribeBtnClass: 'subscribe-button-accepted-email',
        emailValidated: true
      })
    } else {
      this.setState({
        subscribeBtnClass: 'subscribe-button',
        emailValidated: false
      })
    }
  }

  handleChange (event) {
	  var email = event.target.value
    if(email != '' || email != null) {
      this.setState({
        subscriptionEmail: email
      }, () => {
        this.validateEmail(email)
      })
    }
  }

  render () {
    return (
      <div className='App'>

        <Header h2Text='Competition, Cooperation' h1Text='for All' />

        <div className='container-fluid sections3'>
          <div className='row'>
            <div className='col-md-5'>
              <img
                src={SunspearGoldLogo}
                style={{
                  width: '60%',
                  marginRight: '17.5%',
                  marginLeft: '17.5%'
                }} />
            </div>
            <div className='col-md-5 padding30 about-content text-left'>
              <p className='immortal-text'>SunSpear Games <br />
                <strong>Competition, Cooperation, for All</strong></p>
              <p className='immortal-text'>
								It is in games that people find their potential, hone their talent, and realize
								their goals. We are committed to bringing that wonder to pros and casual players
								alike. SunSpear Games are:
              </p>
              <ul className='txt-ul'>
                <li className='txt-li no-wrap-li' >
                  <strong>Social: </strong>
									No matter what the battlefield throws at you, someone has your back.
                </li>
                <li className='txt-li'>
                  <strong>Accessible: </strong>
									Mastery is a path, and starting has never been easier.
                </li>
                <li className='txt-li'>
                  <strong>For All: </strong>
									Good experiences are meant to be shared. Our games are fair and free to play,
									and never pay-to-win.
                </li>
              </ul>
              <p className='immortal-text'>
                The SunSpear Team uses its global talent and bold design to create a multiplayer experience like no other. Join us:
                <strong> become IMMORTAL.</strong>
              </p>
              {/*<div className='immortal-subscribe-container'>
                <a className='btn-default' id='formSubmitBtn' onClick={this.handleShowSubscriptionModal}>Subscribe to annoucements</a>
              </div>
              <Modal isOpen={this.state.showSubscriptionModal} toggle={this.handleShowSubscriptionModal} className={this.props.className} centered>
                <div className='subscription-modal-header'>
                  <h4 className='subscription-modal-title'>IMMORTAL Announcements</h4>
                  <button type='button' className='close subscription-modal-button' aria-label='Close' onClick={() => this.setState({showSubscriptionModal: !this.state.showSubscriptionModal})}>
                    <Icon icon={close} size={30} />
                  </button>
                </div>
                <ModalBody>
                  Add your email to the mailing list for major IMMORTAL announcements.
                  <div className='subscription-modal-email-container'>
                    <input className='subscription-modal-email-input' value={this.state.subscriptionEmail} onChange={this.handleChange}/>
                    <Button color='#002453' className={this.state.subscribeBtnClass} onClick={this.handleSubscribePress}>Subscribe</Button>
                  </div>
                </ModalBody>
              </Modal>*/}
            </div>

          </div>
        </div>
        <SplashRootWitch h2Text='PROJECT:' h1Text='IMMORTAL' />
        <section id='experience' className='experience'>
          <div className='overlay sections-quotes anti-shadow'>
            <div className='container'>
              <div className='row'>
                <div className='experience-wrapper'>
                  <div className='col-md-12 margin-top-30'>
                    <div className='experience-content'>
                      <h5>
												In the bones of dead empires, new civilizations arise
                  </h5>
                      <h6>
												For two thousand years, three worlds have borne the scars of an ancient
												apocalypse. Now, with the Advent of Ancient Gateways, these disparate nations
												are thrown into a conflict that stretches across planets and epochs.
                  </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className='container-fluid sections3'
          style={{
            backgroundColor: '#effaff'
          }}>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='railway-caps'>Real Time Strategy: Reborn</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5'>
              <img src={ArashOfDeliverance} className='arash-img' />
            </div>
            <div className='col-md-5 padding30 text-left'>
              <p className='immortal-text'>
								Welcome to IMMORTAL, a competitive multiplayer experience where legendary heroes
								lead their people to victory on the battlefield. To win, players must forge
								alliances, build armies, and seize territory in exciting PvP and PvE scenarios.
              </p>
              <ul className='txt-ul'>
                <li className='txt-li'>
                  <strong>Play your Way: </strong>
									Descend from the sky with angelic legions, sweep across the land with alien
									hordes, or take to the field with magi-tech outlaws. With over five
									civilizations and dozens of commanders, players choose and customize their
									playstyle.
                </li>
                <li className='txt-li'>
                  <strong>Rally your Allies: </strong>
                  Dominate the battlefield with your friends; work together to outplay and overrun your foes.
                </li>
                <li className='txt-li'>
                  <strong>Command your Army: </strong>
                  Innovative controls and UI features put the power in the hands of the player.
                </li>
                <li className='txt-li'>
                  <strong>Seize your Victory: </strong>
									Reward yourself and your allies with the spoils of war. Create and customize
									armor and relics that display your power.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <HerleshFaction />

        <div id='about' className='container-fluid sections3 darkback'>
          <div className='row'>
            <div className='col-md-12 padding30'>
              <h1 className='railway-caps whitetxt'>
								Built for Players, Built for Viewers
              </h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5'>
              <div className='padding30 text-left' id='about-info-container'>
                <p className='immortal-text'>
                  At the core of every successful esport is a great game. IMMORTAL delivers a compelling experience that is exciting and easy to understand.
                </p>
                <ul className='txt-ul'>
                  <li className='txt-li'>
                    <strong>Community First: </strong>
                    Chat channels, clans, in-client streaming, and automated tournaments prioritize strong and positive communities.
                  </li>
                  <li className='txt-li'>
                    <strong>Built for the Highlight Reel: </strong>
                    Units shine in the hands of a skilled player. Achieve mastery and enforce your will on the battlefield.
                  </li>
                  <li className='txt-li'>
                    <strong>Fair Gameplay, for All: </strong>
                    With a free rotation of heroes, it’s always free to compete. All heroes, factions, and gear can be earned through play.
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-5'>
              <img src={Bloodbound} className='imgflip' id='bloodbound-img' alt='bloodbound' />
            </div>
          </div>
          {/*<div className='immortal-subscribe-container'>
            <a className='btn-default' id='formSubmitBtn' onClick={this.handleShowSubscriptionModal}>Subscribe to annoucements</a>
          </div>*/}
        </div>

        <Footer />

      </div>
    )
  }
}
export default App
