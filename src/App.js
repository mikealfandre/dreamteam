import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'

import './App.css';
import GenerateTeam from './Components/GenerateTeam/GenerateTeam'



class App extends Component {
  constructor(){
    super()
    this.state = {

    }

     
  }

  
  // New way to write axios requests, use just what comes after the URL. Don't neccessarily need the componentdidmoutn()
  
  // componentDidMount() {
  //   axios.get('/api/whatever')
  // }

 

  render() {
    return (
      <div>
        
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <div className="main">
            <p id="dream">Dream Team</p>
            <p id="gen">GENERATOR</p>
          </div>

          {/* <div> Sidebar
            <SavedTeams />
          </div>

          

          <div>
            <CardContainer />
          </div> */}
          <div>
            <GenerateTeam />
          </div>
         
          
      </div>
    );
  }
}

export default App;
