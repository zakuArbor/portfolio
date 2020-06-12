import React from 'react';
import logo from './logo.svg';
import './App.css';

function LinkItem(props) {
  if (props.type == 'social') {
    var class_names = "social_item " + props.icon_name;
  }
  else if (props.type == 'menu') {
    var class_names = "menu_item";
  }
  return (
    <a href ={props.link} className={class_names}>{props.text}
    </a>
  );
}

class SocialBar extends React.Component {
  constructor(props) {
    super(props);
    this.social = [
        {
          "icon_name": "fa fa-github",
          "link": "https://github.com/zakuArbor"
        },
        {
          "icon_name": "fa fa-linkedin",
          "link": "http://www.linkedin.com/in/ju-hong-kim-zaku"
        },
        {
          "icon_name": "fa fa-wordpress",
          "link": "https://zakuarbor.wordpress.com/"
        },
        {
          "icon_name": "fa fa-youtube",
          "link": "https://www.youtube.com/user/nabimoon1234"
        },
        {
          "icon_name": "fa fa-instagram",
          "link": "https://www.instagram.com/misthermit/"
        }
      ];
  }

  render() {
    return (
      <div>
        {this.social.map(function (obj, i) {
          return <LinkItem icon_name={obj.icon_name} link={obj.link} key={i} type='social' text=''/>
        })}  
      </div>
    );
  }
}

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.menus = [
        {
          "menu_name": "ABOUT",
          "link": "#about"
        },
        {
          "menu_name": "SKILLS",
          "link": "#skills"
        },
        {
          "menu_name": "EXPERIENCES",
          "link": "#experiences"
        },
        {
          "menu_name": "PROJECTS",
          "link": "#projects"
        },
      ];
  }

  render() {
    return (
      <ul>
        {this.menus.map(function (obj, i) {
          return <LinkItem text={obj.menu_name} link={obj.link} key={i} type='menu'/>
        })}  
      </ul>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var page = <AboutPage/>;
    
    switch (this.props.id) {
      case "skill":
        page = <SkillPage/>
        break;
      case "experience":
        page = <ExperiencePage/>
        break;
    }
    
    return (
      <div id = {this.props.id} className = "page">
      <span class = "title">{this.props.title}</span>
      {page}
      </div>
    );
  }
}

function AboutPage() {
  return (
    <p className="content">
    <p>Hello World!</p>
    <p>My name is Ju Hong Kim and I am a computer enthusiast. I love learning new things and expanding my knowledge.  My background is in Computer Science and I am particularly interested in reading and learning about Systems Programming.</p>
    <p>I initially self-studied programming on my free time around Middle School and High School particularly focusing on Web Design (Non Javascript Based Technologies) but got interested in Systems after being introduced to Linux.</p>
    <p>My hobbies outside of learning about Computers is to read manga and books, particularly Sci-fi Light Novels.</p>
    </p>
  );
}

function SkillPage() {
  return (
    <p className="content">
    <p><b>Programming Languages:</b> C, Java, Python, Kotlin</p>
    <p><b>Scripting Languages:</b> Perl and Bash</p>
    <p><b>Web Languages and Technologies:</b> HTML, CSS, Javascript, PHP, SQL, MongoDB, NodeJS, React</p>
    <p><b>Version Control:</b> Git and Clearcase</p>
    <p><b>Note:</b> I would probably need a few hours to refresh myself on the syntaxes since it has been a while since I used many of them</p>
    </p>
  );
}

function ExperiencePage() {
  return (
    <p className = "content">
      <div className = "job">
        <p className = "job_title">DB2 Software Developer @ IBM</p>
        <p className = "date">To start at July 6</p>
        <ul className = "job_desc"></ul>
      </div>
      
      <div className = "job">
        <p className = "job_title">DB2 Build Infrastructure Intern @ IBM</p>
        <p className = "date">May 2018 - August 2019 (1 year and 4 months)</p>
        <ul className = "job_desc"></ul>
      </div>

      <div className = "job">
        <p className = "job_title">Student Assisstance @ Ericsson</p>
        <p className = "date">February 2015 - August 2015 (5 months)</p>
        <ul className = "job_desc"></ul>
      </div>
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div class = "wrapper">
            <nav id = "social_bar">
              <SocialBar/>
            </nav>
            <nav id = "menu_bar" class="main_nav">
              <MenuBar/>
            </nav>          
        </div>
      </header>
      <Page id="about" title = "ABOUT"/>
      <Page id="skill" title = "SKILLS"/>
      <Page id="experience" title = "EXPERIENCES"/>
      <div className="App-header">
        <nav>
          <SocialBar/>
        </nav>
      </div>
    </div>
  );
}

export default App;
