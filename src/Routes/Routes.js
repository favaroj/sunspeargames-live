import React, {Component} from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./NavBar";
import ScrollToTop from './../Components/ScrollToTop';
import Immortal from "./Immortal";
import Home from "./Home";
import Team from "./Team";
import Consulting from "./Consulting";
import Live from "./Live";

export default class Routes extends Component {

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Immortal" component={Immortal}/>
            <Route path="/Team" component={Team}/>
            <Route path="/Consulting" component={Consulting}/>
            <Route path="/Live" component={Live}/>
          </Switch>
        </div>
        </ScrollToTop>
      </Router>
    )
  }
}