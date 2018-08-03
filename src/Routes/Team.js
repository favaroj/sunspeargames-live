import React, { Component } from "react";
import Violetta from "./Assets/img/char-splash-violetta-transparent-small.png";
import SunspearGoldLogo from "./Assets/img/minified/sunspear-logo-gold-trans-large-min.PNG";
import SplashRootWitch from "./Assets/img/minified/splash-rootwitch-scaled-min.jpg";
import ArashOfDeliverance from "./Assets/img/minified/arash-of-deliverance-trans.png";
import Bloodbound from "./Assets/img/minified/Bloodbound-Semibright-nobg.png";
import IanImage from "./Assets/img/minified/ian2.png";
import DylanImage from "./Assets/img/minified/dylan.png";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import "./node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import "./Assets/js/scroll.js";

export default class Team extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header h2Text="Forging a world" h1Text="Class Team" />
        <Banner />
        <section id="about" class="sections3">
          <div class="container">
            <div class="row">
              <div class="about-wrapper">
                <div class="col-md-6 padding30">
                  <div class="about-photo">
                    <img
                      src={Violetta}
                      alt="About Photo"
                      style={{height:"650px",float:"right"}}
                    />
                  </div>
                </div>

                <div class="col-md-6 padding30">
                  <div class="about-content text-left">
                    <h3>The Right Combination</h3>
                    <p>
                      Five years ago, several members of the RTS modding
                      community met to discuss the future of esports. Their
                      passion for a better competitive experience turned to a
                      clear vision: an RTS that anyone could play or watch, with
                      worlds and characters anyone could fall in love with.
                      Combining the talent, years of Research and Development
                      that lead to IMMORTAL, with the talent to lead and build
                      the product was the next step. We’re proud to share the
                      team we have today, bringing passionate professionals from
                      Riot Games, Sony America, and Nintendo America.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
