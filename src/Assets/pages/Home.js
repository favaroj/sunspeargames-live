import React, {Component} from "react";
import SunspearGoldLogo from "./Assets/img/minified/sunspear-logo-gold-trans-large-min.PNG";
import Talmetra from "./Assets/img/splash-talmetra-celebrate.jpg"
import SplashRootWitch from "./Assets/img/minified/splash-rootwitch-scaled-min.jpg";
import ArashOfDeliverance from "./Assets/img/minified/arash-of-deliverance-trans.png";
import Bloodbound from "./Assets/img/minified/Bloodbound-Semibright-nobg.png";
import IanImage from "./Assets/img/minified/ian2.png";
import DylanImage from "./Assets/img/minified/dylan.png";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import CircleImage from "./Assets/img/circle.png";
//import "jquery-parallax.js";
import "./node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
//import "./Assets/js/scroll.js";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {

    return (
      <div className="App">
        <NavBar/>
        <Banner/> {/*<section>
          <div className="banner-container whiteback">
            <div className="banner" />
          </div>
        </section>*/}

        {/*<Header h2Text="Competition, Cooperation" h1Text="for All" />*/}

        <div
          id="home"
          className="home anti-shadow home-main-content parallax-window"
          data-parallax="scroll"
          data-image-src={Talmetra}
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
          <div className="overlay sections-quotes anti-shadow ">
            <div className="dot-div">
              <p className="dot-text">TEAM</p>
            </div>
            <div className="dot-div">
              <p className="dot-text">IMMORTAL</p>
            </div>
            <div className="dot-div">
              <p className="dot-text">CONSULTING</p>
            </div>
            {/*<div className="row">
              <div className="fluid-container margin-top-30 dot-container">
                <div className="dot-div">
                  <p className="dot-text">TEAM</p>
                </div>
              </div>
              <div className="fluid-container margin-top-30 dot-container">
                <div className="dot-div">
                  <p className="dot-text">IMMORTAL</p>
                </div>
              </div>
              <div className="fluid-container margin-top-30 dot-container">
                <div className="dot-div">
                  <p className="dot-text">CONSULTING</p>
                </div>
              </div>
          </div>*/}
          </div>
        </section>

        {/*
        <div className="overlay sections-quotes anti-shadow dot-container-padding">
            <div className="container">

                <div className="experience-wrapper">

                  <div className="col-md-4 margin-top-30 dot-container">
                    <img className="dot-sizer" src="./Assets/img/circle.png"></img>
                    <div className="learn-dot dot-div">

                      <p className="dot-text">TEAM</p>

                    </div>
                  </div>
                  <div className="col-md-4 margin-top-30 dot-container">
                    <img className="dot-sizer" src="./Assets/img/circle.png"></img>
                    <div className="learn-dot dot-div">

                      <p className="dot-text">IMMORTAL</p>

                    </div>
                  </div>
                  <div className="col-md-4 margin-top-30 dot-container">
                    <img className="dot-sizer" src="./Assets/img/circle.png"></img>
                    <div className="learn-dot dot-div">

                      <p className="dot-text">CONSULTING</p>

                    </div>
                  </div>
                </div>


            </div>
          </div>










        <div className="container-fluid sections3">
          <div className="row">
            <div className="col-md-5">
              <img
                src={SunspearGoldLogo}
                style={{
                width: "60%",
                marginRight: "17.5%",
                marginLeft: "17.5%"
              }}/>
            </div>
            <div className="col-md-5 padding30 about-content text-left">
              <p>
                It is in games that people find their potential, hone their talent, and realize
                their goals. We are committed to bringing that wonder to pros and casual players
                alike. SunSpear Games are:
              </p>
              <ul className="txt-ul">
                <li className="txt-li">
                  <strong>Social:</strong>
                  No matter what the battlefield throws at you, someone has your back.
                </li>
                <li className="txt-li">
                  <strong>Accessibile:</strong>
                  Mastery is a path, and starting has never been easier.
                </li>
                <li className="txt-li">
                  <strong>Free-To-Play:</strong>
                  Good experiences are meant to be shared. Our games are fair and free to play,
                  and never pay-to-win.
                </li>
              </ul>
              <p>
                The SunSpear Team has used its incredible talent and powerful culture to create
                a multiplayer experience like no other.{" "}
                <strong>Join us. Become IMMORTAL.</strong>
              </p>
            </div>
          </div>
        </div>

        <div
          id="immortal"
          className="home anti-shadow home-main-content parallax-window"
          data-parallax="scroll"
          data-image-src={SplashRootWitch}
          data-z-index="2">
          <div className="anti-shadow">
            <div className="sections set-zindex-top">
              <div className="container set-zindex-top">
                <div className="set-zindex-top">
                  <div className="col-md-12">
                    <div className="home-content">
                      <h2 className="set-zindex-top">PROJECT:</h2>
                      <h1 className="set-zindex-top" id="h1-responsive">
                        IMMORTAL
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="experience" className="experience">
          <div className="overlay sections-quotes anti-shadow">
            <div className="container">
              <div className="row">
                <div className="experience-wrapper">
                  <div className="col-md-12 margin-top-30">
                    <div className="experience-content">
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
          className="container-fluid sections3"
          style={{
          backgroundColor: "#effaff"
        }}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="railway-caps">Real Time Strategy: Reborn</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <img src={ArashOfDeliverance} className="arash-img"/>
            </div>
            <div className="col-md-5 padding30 text-left">
              <p>
                Welcome to IMMORTAL, a competitive multiplayer experience where legendary heroes
                lead their people to victory on the battlefield. To win, players must forge
                alliances, build armies, and seize territory in exciting PvP and PvE scenarios.
              </p>
              <ul className="txt-ul">
                <li className="txt-li">
                  <strong>Play your Way:</strong>
                  Descend from the sky with angelic legions, sweep across the land with alien
                  hordes, or take to the field with magi-tech desparados. With over seven
                  civilizations and dozens of commanders, players choose and customize their
                  playstyle.
                </li>
                <li className="txt-li">
                  <strong>Rally your Allies:</strong>
                  Bring your friends to the battlefield with exciting team gameplay.
                </li>
                <li className="txt-li">
                  <strong>Command your Army:</strong>
                  Innovative controls and UI features put the power in your hands.
                </li>
                <li className="txt-li">
                  <strong>Sieze your Victory:</strong>
                  Reward yourself and your allies with the spoils of war. Create and customize
                  armor and relics that display your power.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="about" className="container-fluid sections3 darkback">
          <div className="row">
            <div className="col-md-12 padding30">
              <h1 className="railway-caps whitetxt">
                Built for Players - Built for Esports
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="padding30 text-left" id="about-info-container">
                <p>
                  At the core of every successful esport is a fun game. IMMORTAL delivers a
                  compelling experience that is exciting and easy to understand.
                </p>
                <ul className="txt-ul">
                  <li className="txt-li">
                    <strong>Community First:</strong>
                    Chat channels, clans, in-client streaming, and automated tournaments prioritize
                    strong and positive communities.
                  </li>
                  <li className="txt-li">
                    <strong>Built for the Highlight Reel:</strong>
                    Units shine in the hands of a skilled player. Achieve mastery and impart your
                    will on the battlefield.
                  </li>
                  <li className="txt-li">
                    <strong>Fair Gameplay, for All:
                    </strong>
                    With a free rotation of heroes, players are always empowered to compete. All
                    gameplay-affecting content can be earned through play.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <img src={Bloodbound} className="imgflip" id="bloodbound-img" alt="bloodbound"/>
            </div>
          </div>
        </div>

        <section id="contact" className="contact">
          <div
            className="fluid-container overlay sectionsContact"
            style={{
            padding: "0px",
            paddingTop: "80px"
          }}>
            <div
              className="contact-wrapper"
              style={{
              marginLeft: "6%",
              marginRight: "6%"
            }}>
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-title">
                    <h1 className="railway-caps whitetxt">Contact</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-details-area">
                    <div className="contact-details">
                      <img src={IanImage} className="padding20"/>
                      <h4>Ian Hunt</h4>
                      <h6>CEO</h6>
                      <p>PHONE: +1 805 284 4179</p>
                      <p>EMAIL: ihunt@sunspeargames.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-details-area">
                    <div className="contact-details">
                      <img src={DylanImage} className="padding20"/>
                      <h4>Dylan Kahn</h4>
                      <h6>Business Development</h6>
                      <p>PHONE: +1 406 465 3449</p>
                      <p>EMAIL: dkahn@sunspeargames.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12"
                style={{
                padding: "0px",
                marginBottom: "8%"
              }}>
                <div className="contact-area">
                  <h4>Contact</h4>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name*"/>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email*"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject*"/>
                    </div>
                    <div className="form-group">
                      <textarea
                        rows={9}
                        className="form-control"
                        id="form-group-message"
                        placeholder="Message"/>
                    </div>
                    <a type="submit" className="btn-default" id="formSubmitBtn">
                      SEND
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
            </section>*/}
        <Footer/>
      </div>
    );
  }
}

export default App;