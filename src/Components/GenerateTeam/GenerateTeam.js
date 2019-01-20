import React, { Component } from 'react'
import axios from 'axios'
import './GenerateTeam.css'
import PlayerCard from './PlayerCard/PlayerCard'




class GenerateTeam extends Component {
    constructor(){
        super()
        this.state = {
            players: [],
            displayPlayers: false,
            count: 0
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

 let randomArray = this.shuffleCards(this.state.players)
 
 this.setState({
     players: randomArray
 })
 

}

shuffleCards(array){

    let i = array.length, j = 0, temp;

    while(i--){
        j = Math.floor(Math.random() * (i + 1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;

}


render(){

   
    const {players} = this.state;
    let cutPlayers = players.slice(0, 5)
    console.log(cutPlayers)
    
    
    let playerss = []
   
    if (this.state.displayPlayers){

            
        playerss = 
        
                <div className="Card-container">

                {cutPlayers.map((player, index) => {
                return <PlayerCard key={player.id} firstName={player.firstName} lastName={player.lastName} country={player.country} team={player.team} position={player.position} />
                })}
                
                </div>
                
            }
            

    return(
        <div>
            <div className="Generate-div">
            <button  onClick={this.generateArray} >GENERATE TEAM</button>
            </div>
            
            {/* {playerss1}
            {playerss2}
            {playerss3}
            {playerss4} */}

            {playerss}

           

            




        </div>
    )



  }
    
    

}
export default GenerateTeam