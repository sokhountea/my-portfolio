import React, { Component } from 'react';

// Styles
import './styles/App.scss';

// Font Awesome icons
import { faMapMarkerAlt, faEnvelope, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Packages
import { elementScrollIntoView } from "seamless-scroll-polyfill";
import FadeIn from 'react-fade-in';

// Images
import pfp from './images/pfp.png';
import pfpDraw from './images/pfp-draw.png';
import pdf from './images/Sokhountea_Sy_CV.pdf';
// Screenshots
import ss1 from './images/ss/1.png';
import ss2 from './images/ss/2.png';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentNode: ' ', offScroll: false, isLandscape: false };
    // This binding is necessary to make `this` work in the callback
    this.waitAndScrollToNode = this.waitAndScrollToNode.bind(this);
    this.scrollToNode = this.scrollToNode.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // Scrolls to section
  scrollToNode(node) {
    elementScrollIntoView(node, { behavior: "smooth" });
  }

  // Waits for menu to close before scrolling to section
  waitAndScrollToNode(node) {
    this.closeMenu();
    setTimeout(function () {
      elementScrollIntoView(node, { behavior: "smooth" });
    }, 300);
  }

  // Handles when clicking on hamburger
  handleMenuClick(node) {
    var menu = document.getElementById('nav-links');
    var content = document.getElementById('content');
    var overlay = document.getElementById('overlay');
    if (node.className === 'box2') {
      node.classList.add('open');
      menu.classList.add('open');
      content.classList.add('move-left');
      overlay.classList.add('open');
    } else {
      this.closeMenu();
    }
  }

  // Handles click outside of the menu
  handleClickOutside(e) {
    if (this.collapse.contains(e.target)) {
      return;
    } else if (this.menu.contains(e.target)) {
      return;
    }
    else {
      // close menu
      this.closeMenu();
    }
  }

  // Closes the menu
  closeMenu() {
    document.getElementById('box2').classList = 'box2';
    document.getElementById('nav-links').classList = 'collapsible';
    document.getElementById('content').classList = 'content';
    document.getElementById('overlay').classList = 'overlay';
  }

  render() {
    return (
      <div className="App">
        <div className="overlay" id="overlay"></div>
        <div className="bar">
          <div className="box1">
            <div className="title" onClick={() => this.scrollToNode(this.main)}>
              SS.
              <span></span>
            </div>
          </div>
          <div className="box2" id="box2" ref={(node) => this.menu = node} onClick={() => this.handleMenuClick(this.menu)}>
            <div id="hamburger">
              <span></span><span></span><span></span>
            </div>
            <div id="cross">
              <span></span><span></span>
            </div>
          </div>
        </div>
        <div ref={(node) => this.collapse = node} className="collapsible" id="nav-links">
          <ul>
            <li onClick={() => this.waitAndScrollToNode(this.main)}><span>Home</span></li>
            <li onClick={() => this.waitAndScrollToNode(this.about)}><span>About</span></li>
            {/*<li onClick={() => this.waitAndScrollToNode(this.experience)}><span>Experience</span></li>*/}
            <li onClick={() => this.waitAndScrollToNode(this.projects)}><span>Projects</span></li>
            <li><a className="pdf-link" href={pdf} target="_blank" rel="noreferrer">Resume</a></li>
            <li>
              <div className="social links">
                <a href="mailto:sokhountea.sy@mail.mcgill.ca" rel="noreferrer"> <FontAwesomeIcon className="icon" icon={faEnvelope} /></a>
                <a href="https://github.com/sokhountea" target="_blank" rel="noreferrer" > <FontAwesomeIcon className="icon" icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/sokhountea-s-99068a180/" target="_blank" rel="noreferrer" > <FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
              </div>
            </li>
          </ul>
        </div>

        <div className="content" id="content">

          <div ref={(node) => this.main = node} className="section main" id="main">
            <div id="section-main">
              <div className="all">
                <div className="main bio">
                  <div>
                    <FadeIn
                      delay={250}>
                      <p>
                        Hello! I’m
                        <br></br>
                        <span className="name">
                          Sokhountea Sy
                          <br></br>
                          <span>
                            /sō-ko͞on-tē/
                          </span>
                        </span>
                        <br></br>
                        and I love creating pretty things.
                        <br></br>
                      </p>
                      <p className="bio text">
                        Full stack developer, based in QC, CAN, currently working on finding the tech stack I am the most comfortable with.
                    </p>
                      <button onClick={() => this.scrollToNode(this.projects)}>
                        My Projects
                      </button>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
            <span className="ocean">
              <div className="wave"></div>
              <div className="wave"></div>
            </span>
          </div>

          <div ref={(node) => this.about = node} className="section about" id="about">
            <div>
              <div className="all">
                <h1>About Me.</h1>
                <div className="aboutTop">
                  <div className="aboutTopLeft">
                    <div>
                      <p>
                        Hello! I'm Sokhountea (Sou for short) and I’m
                        currently a student in my last year at
                      <b> McGill University</b> majoring in
                      Computer Science and minoring in Mathematics
                      and Economics.
                      <br></br>
                        <br></br>
                        <b><em>"I love creating things pretty things"</em></b>,
                      this sentence applies to my hobbies ever
                      since I was young. During the early years of Tumblr, I was
                      obsessed with editing images and drawing, and
                      I had&nbsp;
                      <span style={{ display: "inline-block" }}>
                          <a href="https://taehyunbae.tumblr.com/tagged/edit" target="_blank" rel="noreferrer">multiple</a>
                      &nbsp;
                      <a href="https://hoshisprincess.tumblr.com/tagged/edit" target="_blank" rel="noreferrer">blogs</a>
                        </span>
                      &nbsp;where I would publish my graphics. I would stay up
                      all night editing my blogs' themes, even though the code looked
                      like gibberish at that time. I spent a very big chunk of
                      my teenager years doing that, so naturally, here I am, super into
                      <b> web development</b>!
                      <br></br>
                        <br></br>
                      </p>
                    </div>
                  </div>
                  <div className="image-content">
                    <div>
                      <div className="image">
                        <img className="scale" src={pfpDraw} alt="about" ></img>
                        <img className="scale" src={pfp} alt="about" ></img>
                      </div>
                      <div className="location">
                        <div>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          <span> Montreal, QC, CAN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aboutBottom">
                  <p>Here are some technologies & tools I've worked with:</p>
                  <div className="skills">
                    <ul className="list1">
                      <li> Java</li>
                      <li> HTML & (S)CSS</li>
                      <li> JavaScript</li>
                      <li> Node.js</li>
                    </ul>
                    <ul className="list1">
                      <li> Rest API</li>
                      <li> Styled Components</li>
                      <li> Git</li>
                      <li> Photoshop</li>
                    </ul>
                  </div>
                  <br></br>
                  <p>Here are the technologies I'm currently learning to use:</p>
                  <div className="skills">
                    <ul className="list2">
                      <li> React</li>
                      <li> Redux</li>
                    </ul>
                    <ul className="list2">
                      <li> SQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*
          <div ref={(node) => this.experience = node} className="section experience" id="experience">
            <div>
              <div className="all">
                <div className="extended-heading">
                  <h1>Where I've Worked.</h1>
                </div>
                <div className="experience-all">
                  <div className="experience-block">
                    <div className="experience-info">
                      <h2>Bombardier<span className="date">Jan 2021 - Present</span></h2>
                      <br></br>
                      <h3>Full Stack Developer Intern</h3>
                    </div>
                    <div className="experience-text">
                      <ul>
                        <li> Modify and improve existing code</li>
                        <li> Write original code to address needs as they arise</li>
                        <li> Identify aspects of day to day work that could be automated to improve productivity</li>
                        <li> Use your creativity to develop front-end user experience based on company needs</li>
                        <li> Use your creativity to improve internal tools</li>
                        <li> Make sure your creations will be robust and user-friendly enough for long-term use</li>
                        <li> Quickly conceptualize plug-and-play convergence</li>
                        <li> Participate in Agile rapid prototyping and development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
*/}

          <div ref={(node) => this.projects = node} className="section projects" id="projects">
            <div>
              <div className="all">
                <div className="extended-heading">
                  <h1>Some Projects.</h1>
                </div>
                <div className="projects-all">
                  <div className="project block" block="red" >
                    <img className="cropped-img" src={ss1} alt="proj-1" ></img>
                    <div className="txt">
                      <div>
                        <div className="project-title">
                          <h4>McGill SOCS</h4>
                          <span></span>
                        </div>
                        <p>Designed a new responsive and interactive look to the current McGill's SOCS.
                        Implemented a simple backend that allows logged-in users to modify the content of
                        some pages.
                        </p>
                        <ul className="tech-list">
                          <li>React.js</li>
                          <li>Styled Components</li>
                          <li>Node.js</li>
                          <li>MySQL</li>
                          <li>Rest API</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="project block" block="yellow">
                    <img className="cropped-img" src={ss2} alt="proj-1" ></img>
                    <div className="txt">
                      <div>
                        <div className="project-title">
                          <h4>Tic Tac Toe</h4>
                          <span></span>
                        </div>
                        <p>A simple web page that generates a board game
                        with the same concept as Tic Tac Toe and allows
                        two users to play against one another.
                        </p>
                        <ul className="tech-list">
                          <li>JS</li>
                          <li>jQuery</li>
                          <li>HTML & CSS</li>
                        </ul>
                        <ul className="link-list">
                          <li><a href="https://github.com/sokhountea/tictactoe2020" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                          <li><a href="https://sokhountea.github.io/tictactoe2020/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faExternalLinkAlt} /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div className="all">
              <div className="social links">
                <a href="mailto:sokhountea.sy@mail.mcgill.ca" rel="noreferrer"> <FontAwesomeIcon className="icon" icon={faEnvelope} /></a>
                <a href="https://github.com/sokhountea" target="_blank" rel="noreferrer" > <FontAwesomeIcon className="icon" icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/sokhountea-s-99068a180/" target="_blank" rel="noreferrer" > <FontAwesomeIcon className="icon" icon={faLinkedin} /></a>
              </div>
              <p>Sokhountea Sy</p>
            </div>
          </footer>
        </div>
      </div >
    )
  }
}

export default App;
