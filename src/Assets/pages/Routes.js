import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Immortal from "./Immortal";
import Home from "./../../App";

export default () =>
<Router>
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
  </Router>