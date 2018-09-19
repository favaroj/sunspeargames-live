import React, {Component} from 'react'
import Violetta from './../Assets/img/char-splash-violetta-transparent-small.png'
import IanImage from './../Assets/img/team-portrait-ian.png'
import RonImage from './../Assets/img/team-portrait-ron.jpg'
import NickImage from './../Assets/img/team-portrait-nick.png'
import AndyImage from './../Assets/img/team-portrait-andy.jpg'
import JimImage from './../Assets/img/team-portrait-jim.png'
import JosephImage from './../Assets/img/team-portrait-joseph.png'
import ColterImage from './../Assets/img/team-portrait-colter.png'
import DylanImage from './../Assets/img/team-portrait-dylan.png'
import JavierImage from './../Assets/img/team-portrait-javier.png'
import TravisImage from './../Assets/img/team-portrait-travis.png'
import ThomasImage from './../Assets/img/team-portrait-thomas.png'
import LucianoImage from './../Assets/img/team-portrait-luciano.png'
import TheoImage from './../Assets/img/team-portrait-theo.png'
import SplashRootWitch from './../Components/SplashRootWitch'
import { Modal,ModalBody } from 'reactstrap'
import Icon from 'react-icons-kit'
import {close} from 'react-icons-kit/fa/close'
import Footer from './../Components/Footer'
import LinesEllipsis from 'react-lines-ellipsis'
import './../Assets/css/font-awesome.min.css'
import './../App.css'

export default class About extends React.Component {
  constructor () {
    super()
    this.state = {
      showIanLongText: false,
      showRonLongText: false,
      showAndyLongText: false,
      showJosephLongText: false,
      showColterLongText: false,
      showDylanLongText: false,
      showJavierLongText: false,
      showTravisLongText: false,
      showThomasLongText: false,
      showLucianoLongText: false,
      showTheoLongText: false,
      showNickLongText: false,
      showJimLongText: false,
      showDescriptionModal: false,
      descriptionBackgroundColor: 'inherit',
      selectedDescription: null
    }
    this.toggleLongText = this
      .toggleLongText
      .bind(this)
    this.handleShowDescriptionModal = this.handleShowDescriptionModal.bind(this)
    this.setDescriptionBackgroundColor = this.
      setDescriptionBackgroundColor
      .bind(this)
  }

  componentDidMount () {}

  toggleLongText (person, descriptionPosition) {
    switch (person) {
      case 'Ian':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          /*showIanLongText: !this.state.showIanLongText,*/
          /*descriptionBackgroundColor: '#FFFFFF',*/
          showDescriptionModal: true,
          descriptionModalImage: IanImage,
          descriptionModalName: 'Ian Hunt',
          descriptionModalTitle: 'President',
          descriptionModalText: <p>Ian Hunt joined with the design minds behind SunSpear Games in 2014 to establish a culture of ambition and excellence.
            He brought the entrepreneurial experience required to grow SunSpear from a small group of passionate designers to a multinational design and production company.
            Never satisfied with improvable systems, Ian assembled a team capable of developing disruptive esport titles; simultaneously utilizing SunSpear Games’ elite design talents to consult with companies around the world.
          This multi-focus has led to valuable strategic partnerships, strengthening SunSpear’s production pipelines and expanding its consultation and business networks.</p>
        })
        break

      case 'Ron':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: RonImage,
          descriptionModalName: 'Ron Zaragoza',
          descriptionModalTitle: 'Business Development',
          descriptionModalText: <p>Ron Zaragoza is a game industry veteran and entrepreneur. He brings a unique
            perspective to SunSpear Games having fulfilled a broad range of roles over the
            last 12 years.
            <br />
            <br />
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
            <br />
            <br />
            Following his corporate tour of duty, he launched and co-founded several
            successful creative consulting agencies Blue Fog Design, Switchblade Creative
            Studios, LLC and Ron Zaragoza Creative working with clients such as EA,
            LucasArts, Sony Pictures, PlayStation, Capcom, Tecmo/KOEI, WalMart, Target,
            Toys-R-US, LeapFrog and GE Money.</p>
        })
        break

      case 'Andy':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: AndyImage,
          descriptionModalName: 'Andy Hieke',
          descriptionModalTitle: 'Advising Producer',
          descriptionModalText: <p>In 1981, Andrew Hieke founded Terminal Software, a software publisher and
            later Binary Design Limited, focusing on software development with three studios
            in Manchester and Bristol, UK. In 1993, Hieke joined Microprose Limited as
            Development Director and worked on numerous titles including Formula One Grand
            Prix and X-Com. Spectrum Holobyte acquired Microprose in 1995 and Hieke was
            promoted to Development Director at Spectrum’s head office in Alameda,
            California, overseeing Star Trek, Top Gun and the Falcon brands.
            <br /><br />
            As President of Production, Hieke co-founded PostLinear Ent ertainment, a San
            Francisco based development company that developed card games for the
            Imagination Network and pioneering multiplayer online games, Ten-Six and
            Vigilance for SEGA's Heat.Net.
            <br /><br />
            In 1998, Hieke co-founded the Redmond-based Nintendo Software Technology
            Corporation, the first US based development studio on the Nintendo campus.
            <br /><br />
            In 2000, Hieke was General Manager and Senior Vice President of Atari’s
            Humongous Entertainment studio, working with titles in the Backyard Sports
            franchise, the number one sports brand for children. Andy founded Nimbus Games
            in 2009, developing and publishing games on Facebook and mobile platform
            including licensed IP from Atari, Putt-Putt, Freddi Fish, Pajama Sam and Spy
            Fox.</p>
        })
        break

      case 'Joseph':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: JosephImage,
          descriptionModalName: 'Joseph Walters',
          descriptionModalTitle: 'Technical Advisor',
          descriptionModalText: <p>Joseph Walters is a product and customer driven technology leader with 25
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
            <br /><br />
            Before forming Skunk Studios, Joseph was a senior engineer at shockwave.com,
            where he brought many titles to online gamers. Throughout his career he was
            worked on projects for classic arcade games like Ultimate Tetris to massive
            multiplayer online role playing games like Gatheryn to virtual reality product
            simulators.</p>
        })
        break

      case 'Colter':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: ColterImage,
          descriptionModalName: 'Colter Hochstetler',
          descriptionModalTitle: 'Vice President / Executive Producer',
          descriptionModalText: <p>For the last six years, Colter Hochstetler has brought excellence to
            the Esports user experience. Endorsed and used by esport professionals, Colter’s UX projects
            such as the “Core” and “OneGoal” reflect a passion for performance and execution. Colter’s greatest
            contribution to the SunSpear team has been “Criteria Based Design,” a production methodology that
            improves solution synthesis, design quality, and cohesion of digital experiences. Alongside veteran
            talent, Colter has turned passion into leadership, organizing and coordinating IMMORTAL’s production.</p>
        })
        break

      case 'Dylan':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: DylanImage,
          descriptionModalName: 'Dylan Kahn',
          descriptionModalTitle: 'Creative Lead / Director of Consulting',
          descriptionModalText: <p>Dylan Kahn is a Creative Lead with six years of direct experience in
            esports design. Dylan founded and lead development in the OneGoal project to maximise
            StarCraft 2’s esport potential. After the mod’s success, Dylan joined Recloak Interactive
            as a Creative Designer, and later became a writer for Skywind. Dylan currently leads IMMORTAL’s
            creative teams in content creation and world building.</p>
        })
        break

      case 'Javier':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: JavierImage,
          descriptionModalName: 'Javier Romo',
          descriptionModalTitle: 'Concept Lead',
          descriptionModalText: <p>Javier Romo founded a digital arts studio in Mexico City in 2012, receiving acclaim as both an
            architect and educator within his industry. In 2015 he joined SunSpear Games as the Artistic
            Lead, using his analytical understanding of visual clarity to design new artistic styles for esports
            titles. He is passionate about visual communication and loves to design systems and
            methodologies that express complex ideas through visual media.</p>
        })
        break

      case 'Travis':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: TravisImage,
          descriptionModalName: 'Travis Toler',
          descriptionModalTitle: 'Design Lead',
          descriptionModalText: <p>Travis has been building communities and content in the RTS
            genre for 19 years. Travis was lead designer for StarBow, the most popular mod in
            StarCraft 2. StarBow earned critical acclaim across the StarCraft 2 community,
            garnering support from industry titans like John “Totalbiscuit” Bain, Nick “Tasteless”
            Plott, and Dan “Artosis” Stemkoski. The enthusiasm for StarBow spurred a series of
            tournaments by industry professionals, showcasing the mod’s rich gameplay and design.
            Travis’s contributions to the scene moved Blizzard to incorporate many of StarBow’s design
            elements into Legacy of the Void, the final expansion for StarCraft 2.</p>
        })
        break

      case 'Thomas':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: ThomasImage,
          descriptionModalName: 'Thomas Labonte',
          descriptionModalTitle: 'UX Lead / Community Lead',
          descriptionModalText: <p>Thomas, with Colter, created the first iteration of “TheCore”
            optimal control system for RTS, and lead the team through continued development and
            marketing for the past 4 years.  In that time, he has served as a producer and
            on-camera talent for Machinima’s “Inside Esports”, lead the “Legacy of the Void
            Custom: Fan Alpha” project,  and provided accessibility and quality of life solutions
            to Starcraft 2, many of which have been adopted by Blizzard.  For IMMORTAL, Thomas is
            an ambassador for the casual player base, in User Interface, System Design, and Community Management.</p>
        })
        break

      case 'Luciano':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: LucianoImage,
          descriptionModalName: 'Luciano Donati',
          descriptionModalTitle: 'Gameplay Programmer',
          descriptionModalText: <p>Luciano Donati a passionate game developer with an abiding
            love for esport play. After working in the indie dev scene for five years, helping
            realize titles like Gweep Gwop,Time To: Climb, and The End Go!, Luciano was hungry
            to build something bigger. Today, he is using his experience to create development
            tools for IMMORTAL's artists, designers and engineering team to ensure IMMORTAL
            realizes its potential.</p>
        })
        break

      case 'Theo':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: TheoImage,
          descriptionModalName: 'Theo Mikkelsen',
          descriptionModalTitle: 'Balance Designer / Esports Community Manager',
          descriptionModalText: <p>Theodor is a former professional StarCraft II player
            and Counter-Strike 1.6 player. Besides endeavours in e-sports, he worked with
            BetaDwarf, an indie Game Development studio in Denmark and was credited for his
            balance and design contributions privately and publicly, in the StarCraft II
            community, including back and forths with the core Blizzard StarCraft II team.
            Theodors ability to merge high level multiplayer systems design with modern game
            design philosophies is key to the development of IMMORTAL.</p>
        })
        break

      case 'Nick':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: NickImage,
          descriptionModalName: 'Nick Carpenter',
          descriptionModalTitle: 'Business Advisor',
          descriptionModalText: <p>Nick advises on several business functions. As
            a consultant, he leverages considerable experience in marketing, business
            analysis, and technology management to refine and implement operating
            strategies for clients. He earned an MBA from the University of Southern
            California in 2014. Prior to that, he spent five years managing critical
            enterprise technologies at JP Morgan Chase.</p>
        })
        break

      case 'Jim':
        if (this.state.selectedDescription === descriptionPosition) {
          this.setState({selectedDescription: null})
        } else {
          this.setState({selectedDescription: descriptionPosition})
        }
        this.setState({
          showDescriptionModal: true,
          descriptionModalImage: JimImage,
          descriptionModalName: 'Jim Merrill',
          descriptionModalTitle: 'Technical Lead',
          descriptionModalText: <p>Jim Merrill is a software engineer and the technical
            lead on the Immortal project. After graduating from the University of Puget
            Sound with a BA in Comparative Politics and Government, Jim followed the
            obvious path: he entered the tech industry. He got his start in QA at Riot
            Games and started teaching himself how to program. Within a few years, he
            had transitioned into being a full-time software engineer. During his time
            at Riot he served as the technical lead to a team of junior technical QA
            developers, designed the test automation framework used to test League of
            Legends, and did work on both the network layer and the build system of the
            game. Jim joined Sunspear in March of 2018, bringing with him a passion for
            technical quality and years of experience in delivering updates to a game on
            a fast cadence.</p>
        })
        break
    }
  }

  handleShowDescriptionModal () {
    this.setState({
      showDescriptionModal: !this.state.showDescriptionModal
    })
  }

  setDescriptionBackgroundColor (descriptionPosition) {
    /*if (this.state.selectedDescription === descriptionPosition) {
      return '#FFFFFF'
    } else {
      return 'inherit'
    }*/
  }

  render () {
    return (
      <div className='App'>
        <SplashRootWitch h2TextShow={false} h1Text='ABOUT US' />
        <section id='about' className='fluid-container about-text-section'>
          <div className='row'>
            <div className='col-md-7 padding30'>
              <div className='about-content text-left'>
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

        <Modal isOpen={this.state.showDescriptionModal} toggle={this.handleShowDescriptionModal} className={this.props.className} centered>
          <div className='subscription-modal-header'>
            <button type='button' className='close subscription-modal-button' aria-label='Close' onClick={() => this.setState({showDescriptionModal: !this.state.showDescriptionModal})}>
              <Icon icon={close} size={30} />
            </button>
          </div>
          <div className='fluid-container'>
            <div className='portrait-container'>
              <img className='team-portrait rounded-circle' src={this.state.descriptionModalImage} />
            </div>
            <h4 className='team-name'>{this.state.descriptionModalName}</h4>
            <p className='team-title'>{this.state.descriptionModalTitle}</p>
            <div className='team-description-container'>
              {this.state.descriptionModalText}
            </div>
          </div>
        </Modal>

        <section id='about' className='sections3 light-green-back'>
          <div className='container light-green-back'>
            <div className='light-green-back'>
              <div className='heading-content team-heading'>
                <h1>Business Leadership</h1>
              </div>
              <div className='row row-style'>
                <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(0)}} onClick={() => this.toggleLongText('Ian', 0)}>
                  <div className='fluid-container'>
                    <div className='portrait-container'>
                      <img className='team-portrait rounded-circle' src={IanImage} />
                    </div>
                    <h4 className='team-name'>Ian Hunt</h4>
                    <p className='team-title'>President</p>
                    <div className='team-description-container' onClick={() => this.toggleLongText('Ian')}>
                      {this.state.showIanLongText
                        ?
                        <p>Ian Hunt joined with the design minds behind SunSpear Games in 2014 to establish a culture of ambition and excellence.
                          He brought the entrepreneurial experience required to grow SunSpear from a small group of passionate designers to a multinational design and production company.
                          Never satisfied with improvable systems, Ian assembled a team capable of developing disruptive esport titles; simultaneously utilizing SunSpear Games’ elite design talents to consult with companies around the world.
                          This multi-focus has led to valuable strategic partnerships, strengthening SunSpear’s production pipelines and expanding its consultation and business networks.
                        </p>
                        : <LinesEllipsis
                          text='Ian Hunt joined with the design minds behind SunSpear Games in 2014 to establish a culture of ambition and excellence.
                          He brought the entrepreneurial experience required to grow SunSpear from a small group of passionate designers to a multinational design and production company.
                          Never satisfied with improvable systems, Ian assembled a team capable of developing disruptive esport titles; simultaneously utilizing SunSpear Games’ elite design talents to consult with companies around the world.
                          This multi-focus has led to valuable strategic partnerships, strengthening SunSpear’s production pipelines and expanding its consultation and business networks.'
                          maxLine='3'
                          ellipsis='...'
                          trimRight
                          basedOn='letters' />
                      }
                    </div>
                  </div>
                </div>
                <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(1)}} onClick={() => this.toggleLongText('Colter', 1)}>
                  <div className='team-detail-container'>
                    <div className='portrait-container'>
                      <img className='team-portrait rounded-circle' src={ColterImage} />
                    </div>
                    <h4 className='team-name'>Colter Hochstetler</h4>
                    <p className='team-title'>Vice President / Executive Producer</p>
                    <div className='team-description-container'
                    >
                      {this.state.showColterLongText
                        ? <p>For the last six years, Colter Hochstetler has brought excellence to the Esports user experience. Endorsed and used by esport professionals, Colter’s UX projects  such as the “Core” and “OneGoal” reflect a passion for performance and execution. Colter’s greatest contribution to the SunSpear team has been “Criteria Based Design,” a production methodology that improves solution synthesis, design quality, and cohesion of digital experiences. Alongside veteran talent, Colter has turned passion into leadership, organizing and coordinating IMMORTAL’s production.</p>
                        : <LinesEllipsis
                          text='For the last six years, Colter Hochstetler has brought excellence to the Esports user experience. Endorsed and used by esport professionals, Colter’s UX projects  such as the “Core” and “OneGoal” reflect a passion for performance and execution. Colter’s greatest contribution to the SunSpear team has been “Criteria Based Design,” a production methodology that improves solution synthesis, design quality, and cohesion of digital experiences. Alongside veteran talent, Colter has turned passion into leadership, organizing and coordinating IMMORTAL’s production.'
                          maxLine='3'
                          ellipsis='...'
                          trimRight
                          basedOn='letters' />
                      }
                    </div>
                  </div>
                </div>

                <div className='heading-content text-center team-heading'>
                  <h1>Development Leadership</h1>
                </div>
                <div className='row row-style'>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(2)}} onClick={() => this.toggleLongText('Dylan', 2)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={DylanImage} />
                      </div>
                      <h4 className='team-name'>Dylan Kahn</h4>
                      <p className='team-title'>Creative Lead / Director of Consulting</p>
                      <div className='team-description-container'
                      >
                        {this.state.showDylanLongText
                          ? <p>Dylan Kahn is a Creative Lead with six years of direct experience in esports design. Dylan founded and lead development in the OneGoal project to maximise StarCraft 2’s esport potential. After the mod’s success, Dylan joined Recloak Interactive as a Creative Designer, and later became a writer for Skywind. Dylan currently leads IMMORTAL’s creative teams in content creation and world building.</p>
                          : <LinesEllipsis
                            text='Dylan Kahn is a Creative Lead with six years of direct experience in esports design. Dylan founded and lead development in the OneGoal project to maximise StarCraft 2’s esport potential. After the mod’s success, Dylan joined Recloak Interactive as a Creative Designer, and later became a writer for Skywind. Dylan currently leads IMMORTAL’s creative teams in content creation and world building.'
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(3)}} onClick={() => this.toggleLongText('Travis', 3)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={TravisImage} />
                      </div>
                      <h4 className='team-name'>Travis Toler</h4>
                      <p className='team-title'>Design Lead</p>
                      <div className='team-description-container'
                      >
                        {this.state.showTravisLongText
                          ? <p>Travis has been building communities and content in the RTS genre for 19 years. Travis was lead designer for StarBow, the most popular mod in StarCraft 2. StarBow earned critical acclaim across the StarCraft 2 community, garnering support from industry titans like John “Totalbiscuit” Bain, Nick “Tasteless” Plott, and Dan “Artosis” Stemkoski. The enthusiasm for StarBow spurred a series of tournaments by industry professionals, showcasing the mod’s rich gameplay and design. Travis’s contributions to the scene moved Blizzard to incorporate many of StarBow’s design elements into Legacy of the Void, the final expansion for StarCraft 2.</p>
                          : <LinesEllipsis
                            text='Travis has been building communities and content in the RTS genre for 19 years. Travis was lead designer for StarBow, the most popular mod in StarCraft 2. StarBow earned critical acclaim across the StarCraft 2 community, garnering support from industry titans like John “Totalbiscuit” Bain, Nick “Tasteless” Plott, and Dan “Artosis” Stemkoski. The enthusiasm for StarBow spurred a series of tournaments by industry professionals, showcasing the mod’s rich gameplay and design. Travis’s contributions to the scene moved Blizzard to incorporate many of StarBow’s design elements into Legacy of the Void, the final expansion for StarCraft 2.'
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(4)}} onClick={() => this.toggleLongText('Jim', 4)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={JimImage} />
                      </div>
                      <h4 className='team-name'>Jim Merrill</h4>
                      <p className='team-title'>Technical Lead</p>
                      <div className='team-description-container'>
                        {this.state.showJimLongText
                          ? <p>Jim Merrill is a software engineer and the technical lead on the Immortal project. After
                            graduating from the University of Puget Sound with a BA in Comparative Politics and
                            Government, Jim followed the obvious path: he entered the tech industry. He got his start
                            in QA at Riot Games and started teaching himself how to program. Within a few years, he had
                            transitioned into being a full-time software engineer. During his time at Riot he served as
                            the technical lead to a team of junior technical QA developers, designed the test automation
                            framework used to test League of Legends, and did work on both the network layer and the
                            build system of the game. Jim joined Sunspear in March of 2018, bringing with him a passion
                            for technical quality and years of experience in delivering updates to a game on a fast
                            cadence.</p>
                          : <LinesEllipsis
                            text="Jim Merrill is a software engineer and the technical lead on the Immortal
                            project. After graduating from the University of Puget Sound with a BA in Comparative
                            Politics and Government, Jim followed the obvious path: he entered the tech industry. He
                            got his start in QA at Riot Games and started teaching himself how to program. Within a
                            few years, he had transitioned into being a full-time software engineer. During his time
                            at Riot he served as the technical lead to a team of junior technical QA developers,
                            designed the test automation framework used to test League of Legends, and did work on
                            both the network layer and the build system of the game. Jim joined Sunspear in March of
                            2018, bringing with him a passion for technical quality and years of experience in
                            delivering updates to a game on a fast cadence."
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(5)}} onClick={() => this.toggleLongText('Andy', 5)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={AndyImage} />
                      </div>
                      <h4 className='team-name'>Andy Hieke</h4>
                      <p className='team-title'>Advising Producer</p>
                      <div
                        className='team-description-container'
                      >
                        {this.state.showAndyLongText
                          ? <p>In 1981, Andrew Hieke founded Terminal Software, a software publisher and
												later Binary Design Limited, focusing on software development with three studios
												in Manchester and Bristol, UK. In 1993, Hieke joined Microprose Limited as
												Development Director and worked on numerous titles including Formula One Grand
												Prix and X-Com. Spectrum Holobyte acquired Microprose in 1995 and Hieke was
												promoted to Development Director at Spectrum’s head office in Alameda,
												California, overseeing Star Trek, Top Gun and the Falcon brands.
                            <br /><br />
												As President of Production, Hieke co-founded PostLinear Ent ertainment, a San
												Francisco based development company that developed card games for the
												Imagination Network and pioneering multiplayer online games, Ten-Six and
												Vigilance for SEGA's Heat.Net.
                            <br /><br />
												In 1998, Hieke co-founded the Redmond-based Nintendo Software Technology
												Corporation, the first US based development studio on the Nintendo campus.
                            <br /><br />
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
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                </div>

                <div className='heading-content text-center team-heading'>
                  <h1>Core Team</h1>
                </div>

                <div className='row'>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(6)}} onClick={() => this.toggleLongText('Javier', 6)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={JavierImage} />
                      </div>
                      <h4 className='team-name'>Javier Romo</h4>
                      <p className='team-title'>Concept Lead</p>
                      <div className='team-description-container'
                      >
                        {this.state.showJavierLongText
                          ? <p>Javier Romo founded a digital arts studio in Mexico City in 2012, receiving acclaim as both an
                            architect and educator within his industry. In 2015 he joined SunSpear Games as the Artistic
                            Lead, using his analytical understanding of visual clarity to design new artistic styles for esports
                            titles. He is passionate about visual communication and loves to design systems and
                            methodologies that express complex ideas through visual media.</p>
                          : <LinesEllipsis
                            text='Javier Romo founded a digital arts studio in Mexico City in 2012, receiving acclaim as both an
                            architect and educator within his industry. In 2015 he joined SunSpear Games as the Artistic
                            Lead, using his analytical understanding of visual clarity to design new artistic styles for esports
                            titles. He is passionate about visual communication and loves to design systems and
                            methodologies that express complex ideas through visual media.'
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(7)}} onClick={() => this.toggleLongText('Thomas', 7)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={ThomasImage} />
                      </div>
                      <h4 className='team-name'>Thomas Labonte</h4>
                      <p className='team-title'>UX Lead / Community Lead</p>
                      <div className='team-description-container'
                      >
                        {this.state.showThomasLongText
                          ? <p>Thomas, with Colter, created the first iteration of “TheCore” optimal control system for RTS, and lead the team through continued development and marketing for the past 4 years.  In that time, he has served as a producer and on-camera talent for Machinima’s “Inside Esports”, lead the “Legacy of the Void Custom: Fan Alpha” project,  and provided accessibility and quality of life solutions to Starcraft 2, many of which have been adopted by Blizzard.  For IMMORTAL, Thomas is an ambassador for the casual player base, in User Interface, System Design, and Community Management.</p>
                          : <LinesEllipsis
                            text='Thomas, with Colter, created the first iteration of “TheCore” optimal control system for RTS, and lead the team through continued development and marketing for the past 4 years.  In that time, he has served as a producer and on-camera talent for Machinima’s “Inside Esports”, lead the “Legacy of the Void Custom: Fan Alpha” project,  and provided accessibility and quality of life solutions to Starcraft 2, many of which have been adopted by Blizzard.  For IMMORTAL, Thomas is an ambassador for the casual player base, in User Interface, System Design, and Community Management.'
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(8)}} onClick={() => this.toggleLongText('Luciano', 8)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={LucianoImage} />
                      </div>
                      <h4 className='team-name'>Luciano Donati</h4>
                      <p className='team-title'>Gameplay Programmer</p>
                      <div className='team-description-container'>
                        {this.state.showLucianoLongText
                          ? <p>Luciano Donati a passionate game developer with an abiding love for esport play. After working in the indie dev scene for five years, helping realize titles like Gweep Gwop,Time To: Climb, and The End Go!, Luciano was hungry to build something bigger. Today, he is using his experience to create development tools for IMMORTAL's artists, designers and engineering team to ensure IMMORTAL realizes its potential.</p>
                          : <LinesEllipsis
                            text={"Luciano Donati a passionate game developer with an abiding love for esport play. After working in the indie dev scene for five years, helping realize titles like Gweep Gwop,Time To: Climb, and The End Go!, Luciano was hungry to build something bigger. Today, he is using his experience to create development tools for IMMORTAL's artists, designers and engineering team to ensure IMMORTAL realizes its potential."}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(9)}} onClick={() => this.toggleLongText('Theo', 9)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={TheoImage} />
                      </div>
                      <h4 className='team-name'>Theo Mikkelsen</h4>
                      <p className='team-title'>Balance Designer / Esports Community Manager</p>
                      <div className='team-description-container'
                      >
                        {this.state.showTheoLongText
                          ? <p>Theodor is a former professional StarCraft II player and Counter-Strike 1.6 player. Besides endeavours in e-sports, he worked with BetaDwarf, an indie Game Development studio in Denmark and was credited for his balance and design contributions privately and publicly, in the StarCraft II community, including back and forths with the core Blizzard StarCraft II team. Theodors ability to merge high level multiplayer systems design with modern game design philosophies is key to the development of IMMORTAL.</p>
                          : <LinesEllipsis
                            text='Theodor is a former professional StarCraft II player and Counter-Strike 1.6 player. Besides endeavours in e-sports, he worked with BetaDwarf, an indie Game Development studio in Denmark and was credited for his balance and design contributions privately and publicly, in the StarCraft II community, including back and forths with the core Blizzard StarCraft II team. Theodors ability to merge high level multiplayer systems design with modern game design philosophies is key to the development of IMMORTAL.'
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(10)}} onClick={() => this.toggleLongText('Joseph', 10)}>
                    <div className='team-detail-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={JosephImage} />
                      </div>
                      <h4 className='team-name'>Joseph Walters</h4>
                      <p className='team-title'>Technical Advisor</p>
                      <div
                        className='team-description-container'
                      >
                        {this.state.showJosephLongText
                          ? <p>Joseph Walters is a product and customer driven technology leader with 25
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
                            <br /><br />
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
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(11)}} onClick={() => this.toggleLongText('Ron', 11)}>
                    <div className='fluid-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={RonImage} />
                      </div>
                      <h4 className='team-name'>Ron Zaragoza</h4>
                      <p className='team-title'>Business Development</p>
                      <div
                        className='team-description-container'
                      >
                        {this.state.showRonLongText
                          ? <p>Ron Zaragoza is a game industry veteran and entrepreneur. He brings a unique
                          perspective to SunSpear Games having fulfilled a broad range of roles over the
                          last 12 years.
                            <br />
                            <br />
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
                            <br />
                            <br />
                          Following his corporate tour of duty, he launched and co-founded several
                          successful creative consulting agencies Blue Fog Design, Switchblade Creative
                          Studios, LLC and Ron Zaragoza Creative working with clients such as EA,
                          LucasArts, Sony Pictures, PlayStation, Capcom, Tecmo/KOEI, WalMart, Target,
                          Toys-R-US, LeapFrog and GE Money.</p>
                          : <LinesEllipsis
                            text='Ron Zaragoza is a game industry veteran and entrepreneur. He brings a unique perspective to SunSpear Games having fulfilled a broad range of roles over the last 12 years.
                            Ron started with SEGA of America, 1995, in Third Party Licensing where he worked directly with and supported over 50 game publishers. His creative background and a passion for gaming lead him to San Francisco where he led the creative team at Ubisoft. Therehe created digital art assets, packaging, marketing collateral, retail and tradeshow displays for several AAA titles. He was then hired by Sony Computer Entertainment America (now SIE) to manage its Creative Department, where he worked with counterparts at Sony Europe and Sony Japan to establish the global PlayStation brand Standards and Guidelines. To achieve this, in addition to the daily duties of art direction and managing designers, artists, and vendors, he collaborated with PlayStation Brand Marketing, Licensing and Legal.
                            Following his corporate tour of duty, he launched and co-founded several successful creative consulting agencies Blue Fog Design, Switchblade Creative Studios, LLC and Ron Zaragoza Creative working with clients such as EA, LucasArts, Sony Pictures, PlayStation, Capcom, Tecmo/KOEI, WalMart, Target, Toys-R-US, LeapFrog and GE Money.'
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 margin-top-30 team-description-outer-container' style={{backgroundColor: this.setDescriptionBackgroundColor(12)}} onClick={() => this.toggleLongText('Nick', 12)}>
                    <div className='fluid-container'>
                      <div className='portrait-container'>
                        <img className='team-portrait rounded-circle' src={NickImage} />
                      </div>
                      <h4 className='team-name'>Nick Carpenter</h4>
                      <p className='team-title'>Business Advisor</p>
                      <div
                        className='team-description-container'
                      >
                        {this.state.showNickLongText
                          ? <p>Nick advises on several business functions. As a consultant, he leverages considerable experience in marketing, business analysis, and technology management to refine and implement operating strategies for clients. He earned an MBA from the University of Southern California in 2014. Prior to that, he spent five years managing critical enterprise technologies at JP Morgan Chase.</p>
                          : <LinesEllipsis
                            text='Nick advises on several business functions. As a consultant, he leverages considerable experience in marketing, business analysis, and technology management to refine and implement operating strategies for clients. He earned an MBA from the University of Southern California in 2014. Prior to that, he spent five years managing critical enterprise technologies at JP Morgan Chase.'
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters' />
                        }
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }
}
