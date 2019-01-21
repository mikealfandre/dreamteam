import React, {Component} from 'react'
import axios from 'axios'
import "./SavedTeams.css"
import EditTeam from './Edit/EditTeam'

class SavedTeams extends Component{
    constructor(){
        super()
        
        this.state = {

            savedTeams: []
        }

        this.updateTeamName = this.updateTeamName.bind(this)
        this.handleListUpdate = this.handleListUpdate.bind(this)

    }

componentDidMount(){
    axios.get('/api/teams')
    .then((response) => {
        this.setState({
            savedTeams: response.data
        })
    })
    
}

handleListUpdate(){
    axios.get('/api/teams')
    .then((response) => {
        this.setState({
            savedTeams: response.data
        })
    })

}

updateTeamName(id, teamName){
    axios.put(`/api/updateteam/${id}`, {teamName})
    .then((response) => {
      this.setState({
        savedTeams: response.data
      })
    })

    console.log('UPDATEEED', this.state.savedTeams)
    
}




    
    render(){

        console.log('saved teams', this.state.savedTeams)

        
        

       const {savedTeams} = this.state
       const {deleteTeamFn} = this.props;
       
   
            
        let displayTeams = 
        
                <div>

                {savedTeams.map((team, index) => {
                return(
                
                <div className="delete-button-container">
                <button onClick={() => deleteTeamFn(team.teamID)} className="x-button">X</button>
                <p className="display-names" key={team.index} >{team.teamName}</p>
                <EditTeam updateTeamNameFn={this.updateTeamName} teamID={team.teamID} />
                
                </div>

                )
                
                
                })}
                {/* <EditTeam teamName={this.state.savedTeams.teamName} updateTeamNameFn={this.updateTeamName} teamID={this.props.teamID} /> */}
                
                </div>

                
                



        return(
            
            
            <div>
                
                <p className="ST">SAVED TEAMS</p>

               <div className="display-teams">{displayTeams}</div> 
            
            
            
            
            
            </div>
        )

    }

    





}

export default SavedTeams