import React from 'react';
import logo from './logo.svg';
import './App.css';

function LinkItem(props) {
  if (props.type == 'social') {
    var class_names = "social_item " + props.icon_name;
  }
  return (
    <a href ={props.link} className={class_names}>
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
          return <LinkItem icon_name={obj.icon_name} link={obj.link} key={i} type='social'/>
        })}  
      </div>
    );
  }
}

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.social = [
        {
          "menu_name": "ABOUT",
          "link": "#about"
        },
        {
          "icon_name": "SKILLS",
          "link": "#skills"
        },
        {
          "menu_name": "EXPERIENCES",
          "link": "#experiences"
        },
        {
          "icon_name": "PROJECTS",
          "link": "#projects"
        },
      ];
  }

  render() {
    return (
      <div>
        {this.social.map(function (obj, i) {
          return <LinkItem icon_name={obj.icon_name} link={obj.link} key={i} type='social'/>
        })}  
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id ="social_bar">
          <SocialBar/>
        </div>
      </header>
    </div>
  );
}

export default App;
