import React, {Component} from 'react'
import './../App.css'
import IanImage from './../Assets/img/team-portrait-ian.png'
import DylanImage from './../Assets/img/team-portrait-dylan.png'

export default class ContactForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
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
        </section>
      </div>
    )
  }
}
