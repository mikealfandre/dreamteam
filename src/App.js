import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  
  // New way to write axios requests, use just what comes after the URL. Don't neccessarily need the componentdidmoutn()
  
  // componentDidMount() {
  //   axios.get('/api/whatever')
  // }

  render() {
    return (
      <div className="App">
        
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <div class="title">Hello</div>
          <div style={{fontFamily: 'Avenir'}}>Hello</div>

          
      </div>
    );
  }
}

export default App;
