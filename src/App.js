import React from 'react';
import logo from './logo.svg';
import './App.css';

function LinkItem(props) {
  let class_names;
  if (props.type === 'social') {
    class_names = "social_item " + props.icon_name;
  }
  else if (props.type === 'menu') {
    class_names = "menu_item";
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
    <p>My name is Ju Hong Kim and I am a computer enthusiast. I love learning new things and expanding my knowledge.  My background is in Computer Science and I am particularly interested in reading and learning about Systems Programming.</p>
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
          <LinkItem icon_name={props.github_icon} link={props.github_link} type='social'/>
          <LinkItem icon_name={props.paper_icon} link={props.paper_link} type='social'/>
        </div>
    </div>
  );
}

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [
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
        "title": "PAR: Progress and Report Card Generator",
        "desc": "A web based application designed for teachers to create progress report cards. A semester long High School project that aimed to replace the current program used by the school. (Unfortunately the administration did not adopt our product)",
        "tools": "PHP, SQL, HTML, CSS, Javascript",
        "github": {
            "icon_name": "fa fa-github",
            "link": "https://github.com/zakuArbor/proxyAuth/"
        },
        "paper": {
            "icon_name": "fa fa-file-pdf-o",
            "link": "https://github.com/zakuArbor/PAR/blob/master/final_summative_report.pdf"
        }
      }
    ]; 
  }

  render() {
    return (
      <div className="content">
      {
        this.projects.map(function (obj, i) {
          var key = "proj" + i; //this is to avoid hild unique key prop warning
          var hr = () => { return (<hr/>)};
          if (i === 2) {
            hr = () => { return (<span></span>)};
          }
          console.log(obj.github);
          return <div key = {key}>
              <ProjectItem title={obj.title} desc={obj.desc}  tools={obj.tools}
                github_icon={obj.github.icon_name} github_link={obj.github.link}
                paper_icon={obj.paper.icon_name} paper_link={obj.paper.link}
              />
              {hr()}
            </div>
        })
      }     
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
    </div>
  );
}

export default App;
