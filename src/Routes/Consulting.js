import React, {Component} from 'react'
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
import 'animate.css/animate.min.css'
import './../Assets/css/font-awesome.min.css'
import './../App.css'

class Consulting extends Component {
  constructor () {
    super()
    this.state = {
      consultDesignImage: ConsultDesign,
      consultBalanceImage: ConsultBalance,
      consultEducationImage: ConsultEducation
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount () {}

  handleMouseEnter (component) {
    switch (component) {
      case 'Design':
        this.setState({
          consultDesignImage: ConsultDesignHover
        })
        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalanceHover
        })
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducationHover
        })
        break
    }
  }

  handleMouseLeave (component) {
    switch (component) {
      case 'Design':
        this.setState({
          consultDesignImage: ConsultDesign
        })
        break

      case 'Balance':
        this.setState({
          consultBalanceImage: ConsultBalance
        })
        break

      case 'Education':
        this.setState({
          consultEducationImage: ConsultEducation
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
          <div className='consulting-container'>

            <ScrollAnimation animateIn='fadeInRight'>
              <div className='' onMouseEnter={() => this.handleMouseEnter('Design')} onMouseLeave={() => this.handleMouseLeave('Design')}>
                <img src={this.state.consultDesignImage} className='rounded-circle' id='consult-img' />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInRight'>
              <div className='' onMouseEnter={() => this.handleMouseEnter('Balance')} onMouseLeave={() => this.handleMouseLeave('Balance')}>
                <img src={this.state.consultBalanceImage} className='rounded-circle' id='consult-img' />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInRight'>
              <div className='' onMouseEnter={() => this.handleMouseEnter('Education')} onMouseLeave={() => this.handleMouseLeave('Education')}>
                <img src={this.state.consultEducationImage} className='rounded-circle' id='consult-img' />
              </div>
            </ScrollAnimation>
          </div>
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
