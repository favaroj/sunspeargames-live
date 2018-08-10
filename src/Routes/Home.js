import React, {Component} from "react";
import SunspearGoldLogo from "./../Assets/img/minified/sunspear-logo-gold-trans-large-min.PNG";
import Banner from "./../Components/Banner";
import Footer from "./../Components/Footer";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import "./../Assets/css/font-awesome.min.css";
import "./../App.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {

    return (
      <div className="App">
      <Banner/>
        <div
          id="home"
          className="home anti-shadow home-main-content parallax-window-talmetra"
          data-parallax="scroll"
          data-image-src=""
          data-z-index="2">
          <div>
            <div className="sections set-zindex-top ">
              <div className="fluid-container text-center set-zindex-top"></div>
            </div>
          </div>
        </div>

        <section id="about" className="fluid-container sections3">
          <div className="row">
            <div className="col-md-5 padding30">
              <div className="about-photo">
                <img
                  src={SunspearGoldLogo}
                  alt="SunSpear Games"
                  style={{
                  width: "65%",
                  marginRight: "17.5%",
                  marginLeft: "17.5%"
                }}/>
              </div>
            </div>
            <div
              className="col-md-5 padding30"
              style={{
              float: "right"
            }}>
              <div className="about-content text-left">
                <h3></h3>
                <p>SunSpear's beating heart is putting pride in the process, and testing our
                  beliefs. We unite outstanding talent, each member ready to question assumptions,
                  and have theirs questioned. This pride, passion, and process, has been forged
                  into our first product: IMMORTAL.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="index-learn-more" className="learn-more">
          <div className="overlay sections-quotes anti-shadow">
          <ScrollAnimation animateIn="fadeInRight">
            <Link to="/Team">
              <div className="dot-div">
                <p className="dot-text">TEAM</p>
              </div>
            </Link>
            </ScrollAnimation>
    
            <ScrollAnimation animateIn="fadeInRight">
            <Link to="/Immortal">
              <div className="dot-div">
                <p className="dot-text">IMMORTAL</p>
              </div>
            </Link>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight">
            <Link to="/Consulting">
              <div className="dot-div">
                <p className="dot-text">CONSULTING</p>
              </div>
            </Link>
            </ScrollAnimation>
          </div>
        </section>
      <Footer/>
      </div>
    );
  }
}

export default Home;