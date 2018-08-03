import React, { Component } from "react";
import "./../App.css";

export default class Banner extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <section>
          <div className="banner-container whiteback">
            <div className="banner" />
          </div>
        </section>
      </div>
    );
  }
}
