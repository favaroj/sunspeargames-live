import React, {Component} from "react";
import Violetta from "./../Assets/img/char-splash-violetta-transparent-small.png";
import IanImage from "./../Assets/img/minified/ian2.png";
import RonImage from "./../Assets/img/team-portrait-ron.jpg";
import AndyImage from "./../Assets/img/team-portrait-andy.jpg";
import JosephImage from "./../Assets/img/team-portrait-joseph.jpg";
import ColterImage from "./../Assets/img/team-portrait-colter.png";
import DylanImage from "./../Assets/img/team-portrait-dylan.jpg";
import TravisImage from "./../Assets/img/team-portrait-travis.JPG";
import ThomasImage from "./../Assets/img/team-portrait-thomas.png";
import TheoImage from "./../Assets/img/team-portrait-theo.png";
// import SunspearGoldLogo from
// "./Assets/img/minified/sunspear-logo-gold-trans-large-min.PNG";
import SplashRootWitch from "./../Components/SplashRootWitch";
// import ArashOfDeliverance from
// "./Assets/img/minified/arash-of-deliverance-trans.png"; import Bloodbound
// from "./Assets/img/minified/Bloodbound-Semibright-nobg.png"; import IanImage
// from "./Assets/img/minified/ian2.png"; import DylanImage from
// "./Assets/img/minified/dylan.png"; import NavBar from
// "./../Components/NavBar";
import NavBar from "./NavBar";
// import Header from "./Components/Header"; import Banner from
// "./Components/Banner";
import Footer from "./../Components/Footer";
import LinesEllipsis from 'react-lines-ellipsis'
import "./../Assets/css/font-awesome.min.css";
import "./../App.css";

export default class Team extends React.Component {
	constructor() {
		super();
		this.state = {
			showIanLongText: false,
			showRonLongText: false,
			showAndyLongText: false,
			showJosephLongText: false,
			showColterLongText: false,
			showDylanLongText: false,
			showTravisLongText: false,
			showThomasLongText: false,
			showTheoLongText: false,
		};
		this.toggleLongText = this
			.toggleLongText
			.bind(this);
	}

	componentDidMount() {}

	toggleLongText(Person) {

		switch (Person) {

			case "Ian":
				this.setState({
					showIanLongText: !this.state.showIanLongText
				});
				break;

			case "Ron":
				this.setState({
					showRonLongText: !this.state.showRonLongText
				});
				break;

				case "Andy":
				this.setState({
					showAndyLongText: !this.state.showAndyLongText
				});
				break;

				case "Joseph":
				this.setState({
					showJosephLongText: !this.state.showJosephLongText
				});
				break;

				case "Colter":
				this.setState({
					showColterLongText: !this.state.showColterLongText
				});
				break;

				case "Dylan":
				this.setState({
					showDylanLongText: !this.state.showDylanLongText
				});
				break;

				case "Travis":
				this.setState({
					showTravisLongText: !this.state.showTravisLongText
				});
				break;

				case "Thomas":
				this.setState({
					showThomasLongText: !this.state.showThomasLongText
				});
				break;

				case "Theo":
				this.setState({
					showTheoLongText: !this.state.showTheoLongText
				});
				break;

		}
	}

	render() {
		return (
			<div className="App">
				<NavBar/>

				<SplashRootWitch h2Text="FORGING A WORLD" h1Text="CLASS TEAM"/>

				<section id="about" className="fluid-container sections3">
					<div className="row">
						<div className="col-md-5 padding30">
							<div className="about-photo">
								<img
									src={Violetta}
									alt="About Photo"
									style={{
									width: "65%",
									marginRight: "17.5%",
									marginLeft: "17.5%"
								}}/>
							</div>
						</div>
						<div className="col-md-5 padding30">
							<div className="about-content text-left">
								<h3>The Right Combination</h3>
								<p>Five years ago, several members of the RTS modding community met to discuss
									the future of esports. Their passion for a better competitive experience turned
									to a clear vision: an RTS that anyone could play or watch, with worlds and
									characters anyone could fall in love with.
								</p>
								<p>Combining the talent, years of Research and Development that lead to
									IMMORTAL, with the talent to lead and build the product was the next step. We’re
									proud to share the team we have today, bringing passionate professionals from
									Riot Games, Sony America, and Nintendo America.</p>
							</div>
						</div>
					</div>
				</section>

				<section id="about" className="sections3 light-green-back">
					<div className="container light-green-back">
						<div className="light-green-back">
							<div className="heading-content team-heading">
								<h1>Business Leadership</h1>
							</div>
							<div className="row row-style">
								<div className="col-md-6 margin-top-30">
									<div className="fluid-container">
										<div className="portrait-container">
											<img className="team-portrait rounded-circle" src={IanImage}/>
										</div>
										<h4 className="team-name">Ian Hunt</h4>
										<p className="team-title">CEO</p>
										<div
											className="team-description-container"
											onClick={() => this.toggleLongText("Ian")}>
											{this.state.showIanLongText
												? <p>Ian Hunt’s passion with RTS stretches back to Brood War as a content creator.
														In addition to games, Ian is driven by the potential of disruptive projects.
														Seven years ago, Ian co-founded Authentic Cards, a Souvenir Distribution and
														Manufacturing company where he served as the North American Sales and Marketing
														Director. Ian combined game design passion with entrepreneurial experience to
														found Anvil Studios, a project that would lead him to co-found SunSpear Games.
														His leadership has attracted industry veterans into SunSpear Games, and reflects
														Ian’s desire to challenge conventional wisdom in the entertainment industry.</p>
												: <LinesEllipsis
													text='Ian Hunt’s passion with RTS stretches back to Brood War as a content creator.
												In addition to games, Ian is driven by the potential of disruptive projects.
												Seven years ago, Ian co-founded Authentic Cards, a Souvenir Distribution and
												Manufacturing company where he served as the North American Sales and Marketing
												Director. Ian combined game design passion with entrepreneurial experience to
												found Anvil Studios, a project that would lead him to co-found SunSpear Games.
												His leadership has attracted industry veterans into SunSpear Games, and reflects
												Ian’s desire to challenge conventional wisdom in the entertainment industry.'
													maxLine='3'
													ellipsis='...'
													trimRight
													basedOn='letters'/>
}
										</div>
									</div>
								</div>
								<div className="col-md-6 margin-top-30">
									<div className="fluid-container">

										<div className="portrait-container">
											<img className="team-portrait rounded-circle" src={RonImage}/>
										</div>
										<h4 className="team-name">Ron Zargoza</h4>
										<p className="team-title">Business Development</p>
										<div
											className="team-description-container"
											onClick={() => this.toggleLongText("Ron")}>
											{this.state.showRonLongText
												? <p>Ron Zaragoza is a game industry veteran and entrepreneur. He brings a unique
														perspective to SunSpear Games having fulfilled a broad range of roles over the
														last 12 years.
														<br></br>
														<br></br>
														Ron started with SEGA of America, 1995, in Third Party Licensing where he worked
														directly with and supported over 50 game publishers. His creative background and
														a passion for gaming lead him to San Francisco where he led the creative team at
														Ubisoft. Therehe created digital art assets, packaging, marketing collateral,
														retail and tradeshow displays for several AAA titles. He was then hired by Sony
														Computer Entertainment America (now SIE) to manage its Creative Department,
														where he worked with counterparts at Sony Europe and Sony Japan to establish the
														global PlayStation brand Standards and Guidelines. To achieve this, in addition
														to the daily duties of art direction and managing designers, artists, and
														vendors, he collaborated with PlayStation Brand Marketing, Licensing and Legal.
														<br></br>
														<br></br>
														Following his corporate tour of duty, he launched and co-founded several
														successful creative consulting agencies Blue Fog Design, Switchblade Creative
														Studios, LLC and Ron Zaragoza Creative working with clients such as EA,
														LucasArts, Sony Pictures, PlayStation, Capcom, Tecmo/KOEI, WalMart, Target,
														Toys-R-US, LeapFrog and GE Money.</p>
												: <LinesEllipsis
													text='Ian Hunt’s passion with RTS stretches back to Brood War as a content creator.
												In addition to games, Ian is driven by the potential of disruptive projects.
												Seven years ago, Ian co-founded Authentic Cards, a Souvenir Distribution and
												Manufacturing company where he served as the North American Sales and Marketing
												Director. Ian combined game design passion with entrepreneurial experience to
												found Anvil Studios, a project that would lead him to co-found SunSpear Games.
												His leadership has attracted industry veterans into SunSpear Games, and reflects
												Ian’s desire to challenge conventional wisdom in the entertainment industry.'
													maxLine='3'
													ellipsis='...'
													trimRight
													basedOn='letters'/>
}
										</div>
									</div>
								</div>
							</div>

							<div className="heading-content text-center team-heading">
								<h1>Development Leadership</h1>
							</div>
							<div className="row row-style">
								<div className="col-md-6 margin-top-30">
									<div className="team-detail-container">
										<div className="portrait-container">
											<img className="team-portrait rounded-circle" src={AndyImage}/>
										</div>
										<h4 className="team-name">Andy Hieke</h4>
										<p className="team-title">Executive Producer</p>
										<div
											className="team-description-container"
											onClick={() => this.toggleLongText("Andy")}>
											{this.state.showAndyLongText ?
												<p>In 1981, Andrew Hieke founded Terminal Software, a software publisher and
												later Binary Design Limited, focusing on software development with three studios
												in Manchester and Bristol, UK. In 1993, Hieke joined Microprose Limited as
												Development Director and worked on numerous titles including Formula One Grand
												Prix and X-Com. Spectrum Holobyte acquired Microprose in 1995 and Hieke was
												promoted to Development Director at Spectrum’s head office in Alameda,
												California, overseeing Star Trek, Top Gun and the Falcon brands.
												<br></br><br></br>
											As President of Production, Hieke co-founded PostLinear Ent ertainment, a San
												Francisco based development company that developed card games for the
												Imagination Network and pioneering multiplayer online games, Ten-Six and
												Vigilance for SEGA's Heat.Net.
												<br></br><br></br>
											In 1998, Hieke co-founded the Redmond-based Nintendo Software Technology
												Corporation, the first US based development studio on the Nintendo campus.
												<br></br><br></br>
											In 2000, Hieke was General Manager and Senior Vice President of Atari’s
												Humongous Entertainment studio, working with titles in the Backyard Sports
												franchise, the number one sports brand for children. Andy founded Nimbus Games
												in 2009, developing and publishing games on Facebook and mobile platform
												including licensed IP from Atari, Putt-Putt, Freddi Fish, Pajama Sam and Spy
												Fox.</p>
												: <LinesEllipsis
												text="In 1981, Andrew Hieke founded Terminal Software, a software publisher and
												later Binary Design Limited, focusing on software development with three studios
												in Manchester and Bristol, UK. In 1993, Hieke joined Microprose Limited as
												Development Director and worked on numerous titles including Formula One Grand
												Prix and X-Com. Spectrum Holobyte acquired Microprose in 1995 and Hieke was
												promoted to Development Director at Spectrum’s head office in Alameda,
												California, overseeing Star Trek, Top Gun and the Falcon brands.
												As President of Production, Hieke co-founded PostLinear Ent ertainment, a San
												Francisco based development company that developed card games for the
												Imagination Network and pioneering multiplayer online games, Ten-Six and
												Vigilance for SEGA's Heat.Net.
											In 1998, Hieke co-founded the Redmond-based Nintendo Software Technology
											Corporation, the first US based development studio on the Nintendo campus.
											In 2000, Hieke was General Manager and Senior Vice President of Atari’s
												Humongous Entertainment studio, working with titles in the Backyard Sports
												franchise, the number one sports brand for children. Andy founded Nimbus Games
												in 2009, developing and publishing games on Facebook and mobile platform
												including licensed IP from Atari, Putt-Putt, Freddi Fish, Pajama Sam and Spy
												Fox."
												maxLine='3'
												ellipsis='...'
												trimRight
												basedOn='letters'/>
											}
											</div>
									</div>
								</div>

								<div className="col-md-6 margin-top-30">
									<div className="team-detail-container">
										<div className="portrait-container">
											<img className="team-portrait rounded-circle" src={JosephImage}/>
										</div>
										<h4 className="team-name">Joseph Walters</h4>
										<p className="team-title">Business Development</p>

											<div
											className="team-description-container"
											onClick={() => this.toggleLongText("Joseph")}>
											{this.state.showJosephLongText ?
														<p>Joseph Walters is a product and customer driven technology leader with 25
														years of experience in the gaming industry. A software engineer and serial
														entrepreneur, Joseph was one of the founding members and CTO of Third Track,
														where he led multiple teams developing game and simulation products across
														multiple platforms. Before Third Track, Joseph was a field engineer with Unity
														Technologies working directly with customers such as NASA, Walt Disney,
														Nickelodeon, and all branches of the US Military to solve complex engineering
														problems. He was CEO/CTO for the massive multiplayer online world of Gatheryn
														where he led the fundraising efforts and managed the 50 person studio. Joseph
														was a founding member, partner and CTO at at the hugely-successful Skunk Studios
														where he developed consistent award-winning games. He is well known in video
														game and software development circles as someone who can get software running,
														on budget, and on time.
														<br></br><br></br>
													Before forming Skunk Studios, Joseph was a senior engineer at shockwave.com,
														where he brought many titles to online gamers. Throughout his career he was
														worked on projects for classic arcade games like Ultimate Tetris to massive
														multiplayer online role playing games like Gatheryn to virtual reality product
														simulators.</p>
												: <LinesEllipsis
												text='Joseph Walters is a product and customer driven technology leader with 25
												years of experience in the gaming industry. A software engineer and serial
												entrepreneur, Joseph was one of the founding members and CTO of Third Track,
												where he led multiple teams developing game and simulation products across
												multiple platforms. Before Third Track, Joseph was a field engineer with Unity
												Technologies working directly with customers such as NASA, Walt Disney,
												Nickelodeon, and all branches of the US Military to solve complex engineering
												problems. He was CEO/CTO for the massive multiplayer online world of Gatheryn
												where he led the fundraising efforts and managed the 50 person studio. Joseph
												was a founding member, partner and CTO at at the hugely-successful Skunk Studios
												where he developed consistent award-winning games. He is well known in video
												game and software development circles as someone who can get software running,
												on budget, and on time.
											Before forming Skunk Studios, Joseph was a senior engineer at shockwave.com,
												where he brought many titles to online gamers. Throughout his career he was
												worked on projects for classic arcade games like Ultimate Tetris to massive
												multiplayer online role playing games like Gatheryn to virtual reality product
												simulators.'
												maxLine='3'
												ellipsis='...'
												trimRight
												basedOn='letters'/>
											}
								</div>
									</div>
								</div>
							</div>

							<div className="row row-style row-colter-style">
								<div className="col-md-6 margin-top-30">
									<div className="team-detail-container">
										<div className="portrait-container">
											<img className="team-portrait rounded-circle" src={ColterImage} />
										</div>
										<h4 className="team-name">Colter Hochstetler</h4>
										<p className="team-title">UX Designer come Producer</p>
										<div className="team-description-container"
											onClick={() => this.toggleLongText("Colter")}>
											{this.state.showColterLongText ?
												<p>Colter developed “DarkGrid” and collaborated on “The Core”,  optimal performance tools used by professional gamers around the world to this day. A co-founder of the OneGoal Community project, Colter has used his experience to create the criteria-based design principles, enabling rapid iteration and refinement. This design system has played a major role in the success of the IMMORTAL prototype, which has been enthusiastically endorsed by esports professionals and key community members.
												<br></br><br></br>Working closely with the team has shown a particular talent for the supportive role of producer, and has stepped into it with his trade-mark relentless effort and team building mindset.</p>
											: <LinesEllipsis
											text='Colter developed “DarkGrid” and collaborated on “The Core”,  optimal performance tools used by professional gamers around the world to this day. A co-founder of the OneGoal Community project, Colter has used his experience to create the criteria-based design principles, enabling rapid iteration and refinement. This design system has played a major role in the success of the IMMORTAL prototype, which has been enthusiastically endorsed by esports professionals and key community members.
											Working closely with the team has shown a particular talent for the supportive role of producer, and has stepped into it with his trade-mark relentless effort and team building mindset.'
											maxLine='3'
											ellipsis='...'
											trimRight
											basedOn='letters'/>
											}
										</div>									
										
									</div>
								</div>
							</div>

							<div className="heading-content text-center team-heading">
								<h1>Development Leadership </h1>
							</div>

							<div className="row">
					
					<div className="col-md-6 margin-top-30">
						<div className="team-detail-container">
						
							<div className="portrait-container">
								<img className="team-portrait rounded-circle" src={DylanImage} />
							</div>
							<h4 className="team-name">Dylan Kahn</h4>
							<p className="team-title">Creative Director</p>
							<div className="team-description-container"
											onClick={() => this.toggleLongText("Dylan")}>
											{this.state.showDylanLongText ?
												<p>Dylan Kahn is a Creative Lead with six years of direct experience in esports design. Dylan founded and lead development in the OneGoal project to maximise StarCraft 2’s esport potential. After the mod’s success, Dylan joined Recloak Interactive as a Creative Designer, and later became a writer for Skywind. Dylan currently leads IMMORTAL’s creative teams in content creation and world building.</p>
											: <LinesEllipsis
											text='Dylan Kahn is a Creative Lead with six years of direct experience in esports design. Dylan founded and lead development in the OneGoal project to maximise StarCraft 2’s esport potential. After the mod’s success, Dylan joined Recloak Interactive as a Creative Designer, and later became a writer for Skywind. Dylan currently leads IMMORTAL’s creative teams in content creation and world building.'
											maxLine='3'
											ellipsis='...'
											trimRight
											basedOn='letters'/>
											}
										</div>															
							
						</div>
					</div>  
					
					<div className="col-md-6 margin-top-30">
						<div className="team-detail-container">
						
							<div className="portrait-container">
								<img className="team-portrait rounded-circle" src={TravisImage} />
							</div>
							<h4 className="team-name">Travis Toler</h4>
							<p className="team-title">Gameplay Lead</p>
							<div className="team-description-container"
											onClick={() => this.toggleLongText("Travis")}>
											{this.state.showTravisLongText ?
												<p>Travis has been building communities and content in the RTS genre for 19 years. Travis was lead designer for StarBow, the most popular mod in StarCraft 2. StarBow earned critical acclaim across the StarCraft 2 community, garnering support from industry titans like John “Totalbiscuit” Bain, Nick “Tasteless” Plott, and Dan “Artosis” Stemkoski. The enthusiasm for StarBow spurred a series of tournaments by industry professionals, showcasing the mod’s rich gameplay and design. Travis’s contributions to the scene moved Blizzard to incorporate many of StarBow’s design elements into Legacy of the Void, the final expansion for StarCraft 2.</p>
											: <LinesEllipsis
											text='Travis has been building communities and content in the RTS genre for 19 years. Travis was lead designer for StarBow, the most popular mod in StarCraft 2. StarBow earned critical acclaim across the StarCraft 2 community, garnering support from industry titans like John “Totalbiscuit” Bain, Nick “Tasteless” Plott, and Dan “Artosis” Stemkoski. The enthusiasm for StarBow spurred a series of tournaments by industry professionals, showcasing the mod’s rich gameplay and design. Travis’s contributions to the scene moved Blizzard to incorporate many of StarBow’s design elements into Legacy of the Void, the final expansion for StarCraft 2.'
											maxLine='3'
											ellipsis='...'
											trimRight
											basedOn='letters'/>
											}
										</div>															
							
						</div>
					</div>
					
					<div className="col-md-6 margin-top-30">
						<div className="team-detail-container">
						
							<div className="portrait-container">
								<img className="team-portrait rounded-circle" src={ThomasImage} />
							</div>
							<h4 className="team-name">Thomas Labonte</h4>
							<p className="team-title">UX Lead, Community Lead</p>	
							<div className="team-description-container"
											onClick={() => this.toggleLongText("Thomas")}>
											{this.state.showThomasLongText ?
												<p>Thomas, with Colter, created the first iteration of “TheCore” optimal control system for RTS, and lead the team through continued development and marketing for the past 4 years.  In that time, he has served as a producer and on-camera talent for Machinima’s “Inside Esports”, lead the “Legacy of the Void Custom: Fan Alpha” project,  and provided accessibility and quality of life solutions to Starcraft 2, many of which have been adopted by Blizzard.  For IMMORTAL, Thomas is an ambassador for the casual player base, in User Interface, System Design, and Community Management.</p>
											: <LinesEllipsis
											text='Thomas, with Colter, created the first iteration of “TheCore” optimal control system for RTS, and lead the team through continued development and marketing for the past 4 years.  In that time, he has served as a producer and on-camera talent for Machinima’s “Inside Esports”, lead the “Legacy of the Void Custom: Fan Alpha” project,  and provided accessibility and quality of life solutions to Starcraft 2, many of which have been adopted by Blizzard.  For IMMORTAL, Thomas is an ambassador for the casual player base, in User Interface, System Design, and Community Management.'
											maxLine='3'
											ellipsis='...'
											trimRight
											basedOn='letters'/>
											}
										</div>													
							
						</div>
					</div>
					
					<div className="col-md-6 margin-top-30">
						<div className="team-detail-container">
						
							<div className="portrait-container">
								<img className="team-portrait rounded-circle" src={TheoImage} />
							</div>
							<h4 className="team-name">Theo Mikkelsen</h4>
							<p className="team-title">Balance Designer, Esports Community Manager</p>		
							<div className="team-description-container"
											onClick={() => this.toggleLongText("Theo")}>
											{this.state.showTheoLongText ?
												<p>Theodor is a former professional StarCraft II player and Counter-Strike 1.6 player. Besides endeavours in e-sports, he worked with BetaDwarf, an indie Game Development studio in Denmark and was credited for his balance and design contributions privately and publicly, in the StarCraft II community, including back and forths with the core Blizzard StarCraft II team. Theodors ability to merge high level multiplayer systems design with modern game design philosophies is key to the development of IMMORTAL.</p>
											: <LinesEllipsis
											text='Theodor is a former professional StarCraft II player and Counter-Strike 1.6 player. Besides endeavours in e-sports, he worked with BetaDwarf, an indie Game Development studio in Denmark and was credited for his balance and design contributions privately and publicly, in the StarCraft II community, including back and forths with the core Blizzard StarCraft II team. Theodors ability to merge high level multiplayer systems design with modern game design philosophies is key to the development of IMMORTAL.'
											maxLine='3'
											ellipsis='...'
											trimRight
											basedOn='letters'/>
											}
										</div>															
						</div>
					</div>
				
				</div>
	
						</div>
					</div>
				</section>

				<Footer/>
			</div>
		)
	}
}