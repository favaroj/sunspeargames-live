import React, {Component} from "react";
import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		UncontrolledDropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
} from 'reactstrap';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SunspearLogo from './../Assets/img/minified/logo.png';
import './../App.css';
import {LinkContainer} from "react-router-bootstrap";
import $ from 'jquery';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

export default class Live extends React.Component {
		constructor(props) {
				super(props);

				this.state = {};
		}
		componentDidMount() {}

		render() {
				return (
						<div>
								<section>
										<div className="banner-container whiteback">
												<div className="banner"></div>
										</div>
								</section>
								<section id="about" className="sections3; padding-top:0px;">
										<div className="container" style={{
												width: "100%"
										}}>
												<div className="stream-wrapper">
														<div className="twitch-streamer-main-header">
																<h1>Team Streams
																</h1>
														</div>

														{/* <div class="sidenav">
																<a href="#about">About</a>
																<a href="#services">Services</a>
														</div> */}

														{/* justify-content: inherit!important; */}
														<div>
																<ReactTwitchEmbedVideo channel="jakataktv"/>

																{/* <div className="twitch-streamer-sub-header">
																		<h2>jakatakv</h2>
																		<hr></hr>
																</div> */}
														</div>

														{/* <div className="twitch-streamer-sub-header">
																<h2>jakatakv</h2>
																<hr></hr>
														</div> */}

														<ReactTwitchEmbedVideo channel="incontroltv"/>

												</div>
										</div>
								</section>
						</div>
				)
		}
}