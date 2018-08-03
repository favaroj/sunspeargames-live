import React, {Component} from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Immortal from "./Immortal";
import Home from "./Home";
import Navbar from './NavBar';
import ScrollToTop from './../Components/ScrollToTop';

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
          </Switch>
        </div>
        </ScrollToTop>
      </Router>
    )
  }
}