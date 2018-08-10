import React, {Component} from "react";
import SunspearGoldLogo from "./../Assets/img/minified/sunspear-logo-gold-trans-large-min.PNG";
import ArashOfDeliverance from "./../Assets/img/minified/arash-of-deliverance-trans.png";
import Bloodbound from "./../Assets/img/minified/Bloodbound-Semibright-nobg.png";
import IanImage from "./../Assets/img/minified/ian2.png";
import DylanImage from "./../Assets/img/minified/dylan.png";
import Header from "./../Components/Header";
import SplashRootWitch from "./../Components/SplashRootWitch";
import Footer from "./../Components/Footer";
import "./../Assets/css/font-awesome.min.css";
import "./../App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {}
	render() {
		return (
			<div className="App">

				<Header h2Text="Competition, Cooperation" h1Text="for All"/>

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
								a multiplayer experience like no other.
								<strong>Join us. Become IMMORTAL.</strong>
							</p>
						</div>
					</div>
				</div>
				<SplashRootWitch h2Text="PROJECT:" h1Text="IMMORTAL"/> {/* <Parallax bgImage={SplashRootWitch} strength={550}>
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
								</Parallax> */}

				{/* <Parallax strength={300}>
										<Background >
												<img id="immortal" src={SplashRootWitch}/>
										</Background>
								</Parallax> */}
				{/*<div
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
								</div>*/}

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

				<Footer/>

			</div>
		);
	}
}
export default App;