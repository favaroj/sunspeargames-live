import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ConsultDesign from './../Assets/img/icon-consult-design.png'
import ConsultDesignHover from './../Assets/img/icon-consult-design-hover.png'
import ConsultBalance from './../Assets/img/icon-consult-balance.png'
import ConsultBalanceHover from './../Assets/img/icon-consult-balance-hover.png'
import ConsultEducation from './../Assets/img/icon-consult-educate.png'
import ConsultEducationHover from './../Assets/img/icon-consult-educate-hover.png'
import IanImage from './../Assets/img/minified/ian2.png'
import DylanImage from './../Assets/img/minified/dylan.png'
import Footer from './../Components/Footer'
import ScrollAnimation from 'react-animate-on-scroll'
import scrollToComponent from 'react-scroll-to-component';
import 'animate.css/animate.min.css'
import './../Assets/css/font-awesome.min.css'
import './../App.css'

class Consulting extends Component {
  constructor () {
    super()
    this.state = {
      consultDesignImage: ConsultDesign,
      consultBalanceImage: ConsultBalance,
      consultEducationImage: ConsultEducation,
      consultText: <h1>Design</h1>,
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
          consultText: <h1>Design</h1>
        })
        this.handleFocusDiv()
        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalanceHover,
          consultText: <h1>Balance</h1>
        })
        this.handleFocusDiv()
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducationHover,
          consultText: <h1>Education</h1>
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
          consultText: <h1>Design</h1>
        })
        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalance,
          consultText: <h1>Balance</h1>
        })
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducation,
          consultText: <h1>Education</h1>
        })
        break
    }
  }

  handlePress (component) {
    switch (component) {
      case 'Design':
        if (this.state.showDesignDiv) {
          this.setState({
            consultDesignImage: ConsultDesign,
            consultText: null,
            showDesignDiv: false
          })
        } else {
          this.setState({
            consultDesignImage: ConsultDesignHover,
            consultText: 'Design',
            showDesignDiv: true
          })
        }

        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalance,
          consultText: null
        })
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducation,
          consultText: null
        })
        break
    }
  }

  render () {
    return (
      <div className='App'>
        <section>
          <div className='consulting-header'>
            <h1>Consulting</h1>
            <hr className='consulting-hr' />
          </div>
          {this.state.width > 768
            ? <div>
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
            : <div className='consulting-container'>
              <ScrollAnimation animateIn='fadeIn'>
                <div className='' >
                  <img src={this.state.consultDesignImage} className='rounded-circle' id='consult-img' onClick={() => this.handlePress('Design')} />
                </div>
              </ScrollAnimation>
              {this.state.showDesignDiv
                ? <div className='consulting-text-container' ref='focusDiv'>
                  {this.state.consultText}
                </div>
                : null}
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
          }

        </section>

        <section id='contact' className='contact'>
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
                      <h6>CEO</h6>
                      <p>PHONE: +1 805 284 4179</p>
                      <p>EMAIL: ihunt@sunspeargames.com</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='contact-details-area'>
                    <div className='contact-details'>
                      <img id='contact-image' src={DylanImage} className='padding20' />
                      <h4>Dylan Kahn</h4>
                      <h6>Business Development</h6>
                      <p>PHONE: +1 406 465 3449</p>
                      <p>EMAIL: dkahn@sunspeargames.com</p>
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
        </section>

        <Footer />
      </div>
    )
  }
}

export default Consulting
