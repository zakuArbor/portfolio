import React from 'react';
import logo from './images/logo.svg';
import c_logo from './images/c-logo.png';
import html_logo from './images/html-logo.png';
import './App.css';

function LinkItem(props) {
  let class_names;
  if (props.type === 'social') {
    class_names = "social_item " + props.icon_name;
  }
  else if (props.type === 'menu') {
    class_names = "menu_item";
  }
  else if (props.type === 'project') {
    class_names = "project_icon " + props.icon_name;
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
          "link": "#about",
        },
        {
          "menu_name": "SKILLS",
          "link": "#skill"
        },
        {
          "menu_name": "EXPERIENCES",
          "link": "#experience"
        },
        {
          "menu_name": "PROJECTS",
          "link": "#project"
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
  render() {
    var page = <AboutPage/>;
    
    switch (this.props.id) {
      case "skill":
        page = <SkillPage/>
        break;
      case "experience":
        page = <ExperiencePage/>
        break;
      case "project":
        page = <ProjectPage/>
        break;
      default:
        page = <AboutPage/>
        break;
    }
    
    return (
      <div id = {this.props.id} className = "page">
      <span className = "title">{this.props.title}</span>
      {page}
      </div>
    );
  }
}

function AboutPage() {
  return (
    <div className="content">
    <p>Hello World!</p>
    <p>My name is Ju Hong Kim and I am a computer enthusiast. I love learning new things and expanding my knowledge.  
      My background is in Computer Science and I am particularly interested in reading and learning about Systems Programming 
      (though I am quite lacking in experience and knowledge). My current goals are to self-study more in depth about Operating Systems, 
      learn the basics of embedded programming, and work on old and new projects to improve my skills.
    </p>
    <p>I initially self-studied programming on my free time around Middle School and High School particularly focusing on Web Design (Non Javascript Based Technologies) but got interested in Systems after being introduced to Linux.</p>
    <p>My hobbies outside of learning about Computers is to read manga and books, particularly Sci-fi Light Novels.</p>
    </div>
  );
}

function SkillPage() {
  return (
    <div className="content">
    <p><b>Programming Languages:</b> C, Java, Python, Kotlin</p>
    <p><b>Scripting Languages:</b> Perl and Bash</p>
    <p><b>Web Languages and Technologies:</b> HTML, CSS, Javascript, PHP, SQL, MongoDB, NodeJS, React</p>
    <p><b>Version Control:</b> Git and Clearcase</p>
    <p><b>Note:</b> I would probably need a few hours to refresh myself on the syntaxes since it has been a while since I used many of them</p>
    </div>
  );
}

function JobItem(props) {
  return (
    <div className = "job">
      <p className = "job_title">{props.title}</p>
      <p className = "job_date">{props.date}</p>
      <ul className = "job_desc">
      {props.tasks.map(function (task, i) {
        let key = "task" + i;
        return <li key = {key}>{task}</li>
      })}  
      </ul>
    </div>
  );
}

class ExperiencePage extends React.Component {
  constructor(props) {
    super(props);
    this.jobs = [
      {
        "title": "Db2 Software Developer @ IBM",
        "date": "To start at July 6",
        "tasks": []
      },
      {
        "title": "Db2 Build Infrastructure Intern @ IBM",
        "date": "May 2018 - August 2019 (1 year and 4 months)",
        "tasks": [
          "Ensure nightly and special builds for Db2 are released on a regular basis for Linux/Unix Platforms",
          "Improve Build Infrastructure and automation tools",
          "Debug code and resolve environment issues",
          "Supervise and aid in migrating an internal production server"
          ]
      },
      {
        "title": "HighSchool Student Assisstance @ Ericsson",
        "date": "February 2015 - August 2015 (5 months)",
        "tasks": [
          "Server Migration and Configuration",
          "Managing servers and programs and debug crashes",
          "Debug Programs"
          ]
      }
    ];
  }

  render() {
    return (
      <div className = "content">
      {
        this.jobs.map(function (obj, i) {
          var key = "exp" + i; //this is to avoid hild unique key prop warning
          var hr = () => { return (<hr/>)};
          if (i === 2) {
            hr = () => { return (<span></span>)};
          }
          return <div key = {key}><JobItem title={obj.title} date={obj.date} tasks={obj.tasks}/>{hr()}</div>
        })
      }  
      </div>
    );
  }
}

function ProjectItem(props) {
  console.log(props);
  return (
    <div className = "project">
        <p className = "project_title">{props.title}</p>
        <p className = "project_desc">{props.desc}</p>
        <p className = "project_tools"><b>Languages & Tools</b>: {props.tools}</p>
        <div className = "project_icons">
          <LinkItem icon_name={props.github_icon} link={props.github_link} type='project'/>
          <LinkItem icon_name={props.paper_icon} link={props.paper_link} type='project'/>
        </div>
    </div>
  );
}

var ProjectIcon = ({clickHandler, id, proj_icon}) => (
    <img className = "project_type" onClick ={clickHandler} src = {proj_icon} alt={id}/>
);

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        "display": "c_proj"
    };

    this.proj_icons = [
      { 
        "id": "c_proj", 
        "logo": c_logo
      },
      {
        "id": "web_proj",
        "logo": html_logo
      }
    ];

    this.projects = {
      "c_proj": [
        {
          "title": "ProxyAuth (A security Capstone Project)",
          "desc": "A continuous authentication that aims to replace password login on your desktop by using your smartphone as an authentication device via Bluetooth. Since ProxyAuth uses continuous authentication scheme, you do not need to worry about leaving your computer unlocked. The computer will lock if it cannot detect the device within its vincinty.",
          "tools": "C, PAM, Bluetooth Programming, D-Bus, Kotlin Android Programming",
          "github": {
              "icon_name": "fa fa-github",
              "link": "https://github.com/zakuArbor/proxyAuth/"
          },
          "paper": {
              "icon_name": "fa fa-file-pdf-o",
              "link": "https://github.com/zakuArbor/proxyAuth/blob/master/kim_proxyauth_paper.pdf"
          }
        },
        {
          "title": "A Network text-based Tic Tac Toe",
          "desc": "A tic tac toe game implemented in C that utilizes sockets to allow play over the network. A good refresher on sockets.",
          "tools": "C, sockets",
          "github": {
              "icon_name": "fa fa-github",
              "link": "https://github.com/zakuArbor/ticTacToeC/"
          },
          "paper": {
              "icon_name": "",
              "link": ""
          }
        }
      ],
      "web_proj": [
        {
          "title": "PAR: Progress and Report Card Generator",
          "desc": "A web based application designed for teachers to create progress report cards. A semester long High School project that aimed to replace the current program used by the school. (Unfortunately the administration did not adopt our product)",
          "tools": "PHP, SQL, HTML, CSS, Javascript",
          "github": {
              "icon_name": "fa fa-github",
              "link": "https://github.com/zakuArbor/PAR"
          },
          "paper": {
              "icon_name": "fa fa-file-pdf-o",
              "link": "https://github.com/zakuArbor/PAR/blob/master/final_summative_report.pdf"
          }
        },
        {
          "title": "Portfolio",
          "desc": "This very website you are looking at is made using React. Displays some of my projects, skills and knowledge",
          "tools": "React, HTML, CSS, Javascript",
          "github": {
              "icon_name": "fa fa-github",
              "link": "https://github.com/zakuArbor/portfolio/"
          },
          "paper": {
              "icon_name": "",
              "link": ""
          }
        },
        {
          "title": "FreeCodeCamp Projects",
          "desc": "A repository for most of the projects I worked on from the FreeCodeCamp Curriculum which includes a Random Quote Generator, Calculator, Pomodoro Clock, Tic Tac Toe and Simon Game",
          "tools": "HTML, CSS, Javascript, AJAX",
          "github": {
              "icon_name": "fa fa-github",
              "link": "https://github.com/zakuArbor/FreeCodeCampAssignments/"
          },
          "paper": {
              "icon_name": "",
              "link": ""
          }
        },
        {
          "title": "votingApp-fcc",
          "desc": "Create and vote on Polls. My first MEAN application",
          "tools": "Node.js, MongoDB, HTML, CSS, Javascript, AJAX",
          "github": {
              "icon_name": "fa fa-github",
              "link": "https://github.com/zakuArbor/votingApp-fcc"
          },
          "paper": {
              "icon_name": "",
              "link": ""
          }
        } 
      ]
    }; 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (id) => {
    console.log(id);
    let delta_state = {};
    for (let key of Object.keys(this.projects)) {
      if (key === id) { 
        this.setState({display: key});
        break;
      }
    }
    console.log(this.state);
  }

  render() {
    var project_types = [];
    for (var i = 0; i < this.proj_icons.length; i++) {
      let proj_obj = this.proj_icons[i];
      project_types.push(<ProjectIcon key = {proj_obj["id"]} clickHandler = {()=>{this.handleClick(proj_obj["id"])}} id = {proj_obj["id"]} proj_icon = {proj_obj["logo"]}/>);
    }
    return (
      <div>
      <div className="project_type_icons">
        {
          project_types
        }
      </div>
      <div className="content">
      {
        this.projects[this.state.display].map(function (obj, i) {
          var key = "proj" + i; //this is to avoid hild unique key prop warning
          var hr = () => { return (<hr/>)};
          if (i === 2) {
            hr = () => { return (<span></span>)};
          }

          return <div key = {key}>
              <ProjectItem title={obj.title} desc={obj.desc}  tools={obj.tools}
                github_icon={obj.github.icon_name} github_link={obj.github.link}
                paper_icon={obj.paper.icon_name} paper_link={obj.paper.link}
              />
              {hr()}
            </div>
        })
      }
      <div id = "project_footer"><a href = "https://github.com/zakuArbor">Any many more on my github page</a></div>     
      </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className = "wrapper">
            <nav id = "social_bar">
              <SocialBar/>
            </nav>
            <nav id = "menu_bar" className="main_nav">
              <MenuBar/>
            </nav>          
        </div>
      </header>
      <Page id="about" title = "ABOUT"/>
      <Page id="skill" title = "SKILLS"/>
      <Page id="experience" title = "EXPERIENCES"/>
      <Page id="project" title = "PROJECTS"/>
      <div className="App-header">
        <nav>
          <SocialBar/>
        </nav>
      </div>
      <div className="footer">
        <a href="https://iconscout.com/icons/c-programming">C programming Icon</a> on <a href="https://iconscout.com">Iconscout</a><br/>
        <a href="https://iconscout.com/icons/html-file" target="_blank" rel="noopener noreferrer">Html File Icon</a> by <a href="https://iconscout.com/contributors/dinosoftlabs">Dinosoft Lab</a> on <a href="https://iconscout.com">Iconscout</a>
      </div>
    </div>
  );
}

export default App;
