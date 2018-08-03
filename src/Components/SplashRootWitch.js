import React, {Component} from "react";
import SplashRootWitchImage from "./../Assets/img/minified/splash-rootwitch-scaled-min.jpg";
//import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./../App.css";
import "./../Assets/js/scroll.js";
import {Parallax, Background} from 'react-parallax';
import Zoom from 'react-reveal/Zoom';

export default class SplashRootWitch extends Component {
	constructor() {
		super();
		this.state = {
			width: 0,
			height: 0
		};
		this.updateWindowDimensions = this
			.updateWindowDimensions
			.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}

	render() {
		return (
			<div className="App">
				{this.state.width > 768
					? <Parallax bgImage={SplashRootWitchImage} strength={550}>
							<div className="anti-shadow">
								<div className="sections set-zindex-top">
									<div className="container set-zindex-top">
										<div className="set-zindex-top">
											<div className="col-md-12">
												<div className="home-content">
													<Zoom>
														<h2 className="set-zindex-top">PROJECT:</h2>
														<h1 className="set-zindex-top" id="h1-responsive">
															IMMORTAL
														</h1>
													</Zoom>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Parallax>
					: <Parallax bgImage={SplashRootWitchImage} strength={50}>
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
					</Parallax>}

			</div>
		);
	}
}
