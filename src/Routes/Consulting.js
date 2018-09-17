import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ConsultDesign from './../Assets/img/icon-consult-design.png'
import ConsultDesignHover from './../Assets/img/icon-consult-design-hover.png'
import ConsultBalance from './../Assets/img/icon-consult-balance.png'
import ConsultBalanceHover from './../Assets/img/icon-consult-balance-hover.png'
import ConsultEducation from './../Assets/img/icon-consult-educate.png'
import ConsultEducationHover from './../Assets/img/icon-consult-educate-hover.png'
import IanImage from './../Assets/img/team-portrait-ian.png'
import DylanImage from './../Assets/img/team-portrait-dylan.png'
import ContactForm from './../Components/ContactForm'
import Footer from './../Components/Footer'
import ScrollAnimation from 'react-animate-on-scroll'
import Icon from 'react-icons-kit';
import {angleDoubleLeft} from 'react-icons-kit/fa/angleDoubleLeft'
import {angleDoubleRight} from 'react-icons-kit/fa/angleDoubleRight'
import scrollToComponent from 'react-scroll-to-component';
import 'animate.css/animate.min.css'
import './../Assets/css/font-awesome.min.css'
import './../App.css'
import { close } from 'react-icons-kit/fa/close'

class Consulting extends Component {
  constructor () {
    super()
    this.state = {
      consultDesignImage: ConsultDesign,
      consultBalanceImage: ConsultBalance,
      consultEducationImage: ConsultEducation,
      consultText: <div className='consult-text-inner-container-default fadeIn animated'>
        <div className='consulting-text-align-container'><p className='consulting-text'>Select an option above</p></div></div>,
      width: 0,
      height: 0,
      showDesignDiv: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleFocusDiv = this.handleFocusDiv.bind(this)
    this.focusDiv = React.createRef()
    this.updateWindowDimensions = this
      .updateWindowDimensions
      .bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    /*scrollToComponent(this.textContainer, { offset: 200, align: 'middle', duration: 1500, ease:'linear'});*/
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions () {
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  handleFocusDiv () {
    /*const textDivNode = ReactDOM.findDOMNode(this.refs.focusDiv)
    window.scrollTo(0, 200)*/
  }

  handleMouseEnter (component) {
    switch (component) {
      case 'Design':
        this.setState({
          consultDesignImage: ConsultDesignHover,
          consultText: <div className='consult-text-inner-container fadeIn animated'><h1 className='consult-text-header'>Design</h1>
            <div className='consulting-text-align-container'><p className='consulting-text'>Good design is essential to a successful product. Our talent covers the full
              spectrum of design from UX review to R&D. Regardless of a project’s scale or needs, SunSpear can help.</p></div></div>
        })
        this.handleFocusDiv()
        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalanceHover,
          consultText: <div className='consult-text-inner-container fadeIn animated'><h1 className='consult-text-header'>Balance and Analysis</h1>
            <div className='consulting-text-align-container'><p className='consulting-text'>SunSpear uses its experience in multiplayer, competitive game design to support high-value IPs
              with balance support and post-launch analysis.</p></div></div>
        })
        this.handleFocusDiv()
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducationHover,
          consultText: <div className='consult-text-inner-container fadeIn animated'><h1 className='consult-text-header'>Education</h1>
            <div><p className='consulting-text'>As digital games become multigenerational, design education has become vital to the health of
              developer communities. SunSpear is committed to developing strong developer communities
              around the world, offering educational services on ‘Criteria-based Design’ and iterative culture.
              Our workshops offer in-depth analysis, personal engagement, and ongoing support.</p>
              <div className='consulting-text-mobile-spacer'></div></div></div>
        })
        this.handleFocusDiv()
        break
    }
  }

  handleMouseLeave (component) {
    switch (component) {
      case 'Design':
        this.setState({
          consultDesignImage: ConsultDesign,
          consultText: <div className='consult-text-inner-container fadeIn animated'><h1 className='consult-text-header'>Design</h1>
            <div className='consulting-text-align-container'><p className='consulting-text'>Good design is essential to a successful product. Our talent covers the full
              spectrum of design from UX review to R&D. Regardless of a project’s scale or needs, SunSpear can help.</p></div></div>
        })
        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalance,
          consultText: <div className='consult-text-inner-container fadeIn animated'><h1 className='consult-text-header'>Balance and Analysis</h1>
            <div className='consulting-text-align-container'><p className='consulting-text'>SunSpear uses its experience in multiplayer, competitive game design to support high-value IPs
              with balance support and post-launch analysis.</p></div></div>
        })
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducation,
          consultText: <div className='consult-text-inner-container fadeIn animated'><h1 className='consult-text-header'>Education</h1>
            <div><p className='consulting-text'>As digital games become multigenerational, design education has become vital to the health of
              developer communities. SunSpear is committed to developing strong developer communities
              around the world, offering educational services on ‘Criteria-based Design’ and iterative culture.
              Our workshops offer in-depth analysis, personal engagement, and ongoing support.</p>
            </div></div>
        })
        break
    }
  }

  handlePress (component) {
    switch (component) {
      case 'Design':
        this.setState({
          consultDesignImage: ConsultDesignHover,
          consultBalanceImage: ConsultBalance,
          consultEducationImage: ConsultEducation,
          consultText: <div className='consult-text-inner-container'><h1 className='consult-text-header'>Design</h1>
            <p className='consulting-text'>Good design is essential to a successful product. Our talent covers the full
              spectrum of design from UX review to R&D. Regardless of a project’s scale or needs, SunSpear can help.</p></div>
        })
        this.handleFocusDiv()
        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalanceHover,
          consultDesignImage: ConsultDesign,
          consultEducationImage: ConsultEducation,
          consultText: <div className='consult-text-inner-container'><h1 className='consult-text-header'>Balance and Analysis</h1>
            <p className='consulting-text'>SunSpear uses its experience in multiplayer, competitive game design to support high-value IPs
              with balance support and post-launch analysis.</p></div>
        })
        this.handleFocusDiv()
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducationHover,
          consultDesignImage: ConsultDesign,
          consultBalanceImage: ConsultBalance,
          consultText: <div className='consult-text-inner-container'><h1 className='consult-text-header'>Education</h1>
            <p className='consulting-text'>As digital games become multigenerational, design education has become vital to the health of
              developer communities. SunSpear is committed to developing strong developer communities
              around the world, offering educational services on ‘Criteria-based Design’ and iterative culture.
              Our workshops offer in-depth analysis, personal engagement, and ongoing support.</p></div>
        })
        this.handleFocusDiv()
        break
    }
  }

  render () {
    return (
      <div className='App'>
        <section>
          <div className='consulting-header'>
            <h1 className='consulting-header-text'>Consulting</h1>
            <hr className='consulting-hr' />
          </div>
          {this.state.width > 768
            ? <div>
              <div className='consulting-sub-header-container'><h3 className='consulting-sub-header'>Better Games; Better Communities; By Design</h3></div>
              {/*<div className='consulting-icons-outer-container'><div className='consulting-icons-inner-container'><Icon icon={angleDoubleRight} size={30} className='consulting-angle-icon' /><Icon icon={angleDoubleLeft} size={30} className='consulting-angle-icon' /></div><hr style={{width: '30%'}} /><div className='consulting-icons-inner-container'><Icon icon={angleDoubleRight} size={30} className='consulting-angle-icon' /><Icon icon={angleDoubleLeft} size={30} className='consulting-angle-icon' /></div></div>
              <div className='sunspear-services-header-container'><h1 className='sunspear-services-header'>SunSpear Services</h1></div>*/}
              <div className='sunspear-services-container'><p className='sunspear-services-text'>SunSpear’s core values are collaboration and community. To that end, we offer a range of consulting services to aid in the development of promising IPs and teams.</p></div>
            <div className='consulting-container'>
              <ScrollAnimation animateIn='fadeIn'>
                <div className='' >
                  <img src={this.state.consultDesignImage} className='rounded-circle' id='consult-img' onMouseEnter={() => this.handleMouseEnter('Design')} onMouseLeave={() => this.handleMouseLeave('Design')} />
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className='' >
                  <img src={this.state.consultBalanceImage} className='rounded-circle' id='consult-img' onMouseEnter={() => this.handleMouseEnter('Balance')} onMouseLeave={() => this.handleMouseLeave('Balance')} />
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className='' >
                  <img src={this.state.consultEducationImage} className='rounded-circle' id='consult-img' onMouseEnter={() => this.handleMouseEnter('Education')} onMouseLeave={() => this.handleMouseLeave('Education')} />
                </div>
              </ScrollAnimation>

            </div>
              <div className='consulting-text-container' ref='focusDiv'>
                {this.state.consultText}
              </div>
            </div>
            : <div>
              <div className='consulting-sub-header-container'><h3 className='consulting-sub-header'>Better Games;</h3><h3 className='consulting-sub-header'>Better Communities;</h3><h3 className='consulting-sub-header'>By Design</h3></div>
              {/*<div className='consulting-icons-outer-container'><div className='consulting-icons-inner-container'><Icon icon={angleDoubleRight} size={30} className='consulting-angle-icon' /><Icon icon={angleDoubleLeft} size={30} className='consulting-angle-icon' /></div><hr style={{width: '30%'}} /><div className='consulting-icons-inner-container'><Icon icon={angleDoubleRight} size={30} className='consulting-angle-icon' /><Icon icon={angleDoubleLeft} size={30} className='consulting-angle-icon' /></div></div>
              <div className='sunspear-services-header-container'><h1 className='sunspear-services-header'>SunSpear Services</h1></div>*/}
              <div className='sunspear-services-container'><p className='sunspear-services-text'>SunSpear’s core values are collaboration and community. To that end, we offer a range of consulting services to aid in the development of promising IPs and teams.</p></div>
              <div className='consulting-container'>
              <ScrollAnimation animateIn='fadeIn'>
                <div className='consult-img-container' >
                  <img src={this.state.consultDesignImage} className='rounded-circle' id='consult-img' onClick={() => this.handlePress('Design')} />
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className='consult-img-container' >
                  <img src={this.state.consultBalanceImage} className='rounded-circle' id='consult-img' onClick={() => this.handlePress('Balance')} />
                </div>
              </ScrollAnimation>

              <ScrollAnimation animateIn='fadeIn'>
                <div className='consult-img-container' >
                  <img src={this.state.consultEducationImage} className='rounded-circle' id='consult-img' onClick={() => this.handlePress('Education')} />
                </div>
              </ScrollAnimation>
            </div>
            <div className='consulting-text-container animated fadeIn' ref='focusDiv'>
              {this.state.consultText}
            </div>
            </div>
          }

        </section>

        {/*<section id='contact' className='contact'>
          <div
            className='fluid-container overlay sectionsContact'
            style={{
              padding: '0px',
              paddingTop: '80px'
            }}>
            <div
              className='contact-wrapper'
              style={{
                marginLeft: '6%',
                marginRight: '6%'
              }}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='contact-title'>
                    <h1 className='railway-caps whitetxt'>Contact</h1>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='contact-details-area'>
                    <div className='contact-details'>
                      <img src={IanImage} id='contact-image' className='padding20 ' />
                      <h4>Ian Hunt</h4>
                      <h6>President</h6>
                      <p>+1 805 284 4179</p>
                      <p>ihunt@sunspeargames.com</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='contact-details-area'>
                    <div className='contact-details'>
                      <img id='contact-image' src={DylanImage} className='padding20' />
                      <h4>Dylan Kahn</h4>
                      <h6>Creative Lead</h6>
                      <p>+1 406 465 3449</p>
                      <p>dkahn@sunspeargames.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-md-12'
                style={{
                  padding: '0px',
                  marginBottom: '8%'
                }}>
                <div className='contact-area'>
                  <h4>Contact</h4>
                  <form>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Name*' />
                    </div>
                    <div className='form-group'>
                      <input type='email' className='form-control' placeholder='Email*' />
                    </div>
                    <div className='form-group'>
                      <input type='text' className='form-control' placeholder='Subject*' />
                    </div>
                    <div className='form-group'>
                      <textarea
                        rows={9}
                        className='form-control'
                        id='form-group-message'
                        placeholder='Message' />
                    </div>
                    <a type='submit' className='btn-default' id='formSubmitBtn'>
											SEND
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
        <ContactForm />
        <Footer />
      </div>
    )
  }
}

export default Consulting
