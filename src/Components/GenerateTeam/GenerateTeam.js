import React, { Component } from 'react'
import axios from 'axios'
import './GenerateTeam.css'




class GenerateTeam extends Component {
    constructor(){
        super()
        this.state = {
            players: [],
            displayPlayers: false
        }
        
        this.generateArray = this.generateArray.bind( this );
    }
componentDidMount(){
axios.get('/api/players')
    .then((response) => {
        this.setState({
            players: response.data
        })
       
    }) 
  
}

generateArray(){

 this.setState({
     displayPlayers: !this.state.displayPlayers
 })

    // let playerArray = this.state.players.map(player => 
    // (<div key={player.id}> {player.firstName + ' ' + player.lastName}</div>) )
    // console.log(playerArray)

    // this.setState({
    //     players: [playerArray]
    // })


}

render(){

    // let playerArray = this.state.players.map(player => 
    // (<div key={player.id}> {player.firstName + ' ' + player.lastName}</div>) )
    // console.log(playerArray)

   let playerss = []
   
    if (this.state.displayPlayers){

            playerss = this.state.players.map((player, index) => {
                return <p key={player.id}> {player.firstName}</p>
                })
        }

       let playerss1 = playerss[Math.floor(Math.random() * playerss.length)];
       let playerss2 = playerss[Math.floor(Math.random() * playerss.length)];
       let playerss3 = playerss[Math.floor(Math.random() * playerss.length)];
       let playerss4 = playerss[Math.floor(Math.random() * playerss.length)];

        
    return(
        <div>
            <div className="Generate-div">
            <button  onClick={this.generateArray} >Generate</button>
            </div>
            
            {playerss1}
            {/* {playerss2}
            {playerss3}
            {playerss4} */}
        </div>
    )



  }
    
    

}
export default GenerateTeam