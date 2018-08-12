import React, {Component} from "react";
import HeaderImage from "./../Assets/img/minified/header-bg-scaled-min.jpg";
//import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./../App.css";
import "./../Assets/js/scroll.js";
import {Parallax, Background} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Header extends Component {
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
          ? <Parallax
              bgImage={HeaderImage}
              strength={550}
              className="anti-shadow react-parallax-bgimage-header"
              style={{height: 'auto'}}>
              <div className="anti-shadow react-parallax-bgimage">
                <div className="sections set-zindex-top">
                  <div className="fluid-container set-zindex-top">
                    <div className="set-zindex-top">
                      <div className="col-md-12">
                        <div className="home-content">
                        <ScrollAnimation animateIn="fadeIn">
                          <h2 className="set-zindex-top " id="h2-responsive">
                            {this.props.h2Text}
                          </h2>
                          <h1 className="set-zindex-top " id="h1-responsive">
                            {this.props.h1Text}
                          </h1>
                          </ScrollAnimation>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          : <Parallax
            bgImage={HeaderImage}
            strength={50}
            className="react-parallax-bgimage-header">
            <div className="anti-shadow react-parallax-bgimage-header">
              <div className="sections set-zindex-top">
                <div className="fluid-container set-zindex-top">
                  <div className="set-zindex-top">
                    <div className="col-md-12">
                      <div className="home-content">
                      {/* <ScrollAnimation animateIn="fadeIn"> */}
                        <h2 className="set-zindex-top" id="h2-responsive">
                          {this.props.h2Text}
                        </h2>
                        <h1 className="set-zindex-top" id="h1-responsive">
                          {this.props.h1Text}
                        </h1>
                        {/* </ScrollAnimation> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>}

        {/*<div
          id="home"
          className="home anti-shadow home-main-content parallax-window"
          data-parallax="scroll"
          data-image-src={HeaderImage}
          data-z-index="2"
        >
          <div className="anti-shadow">
            <div className="sections set-zindex-top">
              <div className="fluid-container set-zindex-top">
                <div className="set-zindex-top">
                  <div className="col-md-12">
                    <div className="home-content">
                      <h2 className="set-zindex-top ">
                        {this.props.h2Text}
                      </h2>
                      <h1 className="set-zindex-top " id="h1-responsive">
                        {this.props.h1Text}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    );
  }
}
