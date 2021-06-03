import React, { Component } from 'react';
import HeaderNav from './components/header/HeaderNav';
import Content from './components/content/Content';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <HeaderNav/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;