import React, {Component} from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./NavBar";
import ScrollToTop from './../Components/ScrollToTop';
import Immortal from "./Immortal";
import Home from "./Home";
import About from "./About";
import Consulting from "./Consulting";
import Contact from "./Contact";
import Live from "./Live";

export default class Routes extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Immortal" component={Immortal}/>
            <Route path="/About" component={About}/>
            <Route path="/Consulting" component={Consulting}/>
            <Route path="/Contact" component={Contact}/>
            {/* <Route path="/Live" component={Live}/> */}
          </Switch>
        </div>
        </ScrollToTop>
      </Router>
    )
  }
}