import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'

import './App.css';
import GenerateTeam from './Components/GenerateTeam/GenerateTeam'
import SavedTeams from "./Components/GenerateTeam/SavedTeams/SavedTeams"
import SaveButton from "./Components/GenerateTeam/SavedTeams/SaveButton"



class App extends Component {
  constructor(){
    super()
    this.state = {

      teams: []

    }

     this.deleteTeam = this.deleteTeam.bind(this)
  }
  componentDidMount(){
    axios.get('/api/teams')
    .then((response) => {
        this.setState({
            teams: response.data
        })
    })
    
}

  deleteTeam(id){
    console.log('deleteteam1', this.state.teams)
    axios.delete(`/api/deleteteam/${id}`)
    .then((response) =>{
      this.setState({
        teams: response.data
      })
    })
    console.log('deleteteam2', this.state.teams)
  }

  
  // New way to write axios requests, use just what comes after the URL. Don't neccessarily need the componentdidmoutn()
  
  // componentDidMount() {
  //   axios.get('/api/whatever')
  // }

  

 

  render() {

    console.log('updatedTeam', this.state.teams)
    console.log('deleteteam1', this.state.teams)

    return (
      <div className="main">
        
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          <div className='main2'>
            <p id="dream">Dream Team</p>
            <p id="gen">GENERATOR</p>
          </div>

          

          
          <div className="saved-teams-container">
            <SavedTeams deleteTeamFn={this.deleteTeam} />
          </div>
          
          <div>
            <GenerateTeam />
            {/* <SaveButton /> */}
          </div>

         
          
          

          
         
          
      </div>
    );
  }
}

export default App;
