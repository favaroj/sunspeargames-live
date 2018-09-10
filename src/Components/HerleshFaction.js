import React, {Component} from "react";
//import HeaderImage from "./../Assets/img/minified/header-bg-scaled-min.jpg";
import HerleshFactionImage from './../Assets/img/minified/splash-herlesh-faction.png'
//import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./../App.css";
import "./../Assets/js/scroll.js";
import {Parallax, Background} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class HerleshFaction extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this
      .updateWindowDimensions
      .bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  render() {
    return (
      <div className="App">
        {this.state.width > 768
          ? <Parallax bgImage={HerleshFactionImage} strength={550} style={{height: 850}}>
            {/*<div className='anti-shadow'>
              <div className='sections set-zindex-top'>
                <div className='container set-zindex-top'>
                  <div className='set-zindex-top'>
                    <div className='col-md-12'>
                      <div className='home-content'>
                        <ScrollAnimation animateIn='fadeIn'>
                          { this.props.h2TextShow
                            ? <h2 className='set-zindex-top' id='h2-responsive'>{this.props.h2Text}</h2>
                            : null
                          }
                          <h1 className='set-zindex-top' id='h1-responsive'>
                            {this.props.h1Text}
                          </h1>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
          </Parallax>
          : <div className='root-witch-mobile-container' style={{background: HerleshFactionImage}} >
            <div className='anti-shadow'>
              <div className='sections set-zindex-top'>
                <div className='container set-zindex-top'>
                  <div className='set-zindex-top'>
                    <div className='col-md-12'>
                      <div className='home-content'>
                        {/* <ScrollAnimation animateIn="fadeIn"> */}
                        { this.props.h2TextShow
                          ? <h2 className='set-zindex-top' id='h2-responsive'>{this.props.h2Text}</h2>
                          : null
                        }

                        <h1 className='set-zindex-top' id='h1-responsive'>
                          {this.props.h1Text}
                        </h1>
                        {/* </ScrollAnimation> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}
