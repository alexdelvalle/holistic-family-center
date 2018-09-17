import React, { Component } from 'react';
import mail from './mail.svg';
import whiteLogo from './whiteLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="logoText"> Holistic Family Center</h1>
          <img className="logo" src={whiteLogo}/>
          <p> Coming soon!</p>
        </div>
        <div className="footer">
          {/* <img className="mailIcon" src={mail}/> */}
          {/* <span>j.delvalle@holisticfamilycenter.com</span> */}
        </div>
      </div>
    );
  }
}

export default App;
