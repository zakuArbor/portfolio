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
    </div>
  );
}

export default App;
