import React, {Component} from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./NavBar";
import ScrollToTop from './../Components/ScrollToTop';
import Immortal from "./Immortal";
import Home from "./Home";
import Team from "./Team";
export default class Routes extends Component {

  render() {
    return (
      <Router>
        <ScrollToTop>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Immortal" component={Immortal}/>
            <Route path="/Team" component={Team}/>
          </Switch>
        </div>
        </ScrollToTop>
      </Router>
    )
  }
}