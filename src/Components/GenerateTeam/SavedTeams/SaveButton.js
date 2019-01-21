import React, {Component} from 'react'
import "./SaveButton.css"
import axios from 'axios'


class SaveButton extends Component{
    constructor(){
        super()
        this.state = {

            teamName: "",
            dreamteam: [],
            teams:[]

        }
        

        this.saveTeam = this.saveTeam.bind(this)
    }
    

    updateUserInput(val){
        this.setState({
            teamName: val
            
        })
        console.log('userinput', this.state.teamName)
    }
    updateDreamTeam(){
        // let {dreamteam} = this.props.dreamteam
        // const {dreamteam} = this.props
        // console.log('dreamteam', 'hi', dreamteam)
    }
    
        
    
saveTeam(obj){
        
        
    
        axios.post('/api/saveteam', obj)
        .then((response) => {
            this.setState({
                teams: response.data
            })
            
        })
        
        
    }
    


    render(){
        

        const {dreamteam1} = this.props
        
        
        let newDreamTeam = {
            teamName: '',
            idOne:{},
            idTwo:{},
            idThree:{},
            idFour:{},
            idFive:{},
        }
        newDreamTeam.teamName = this.state.teamName
        newDreamTeam.idOne = dreamteam1[0]
        newDreamTeam.idTwo = dreamteam1[1]
        newDreamTeam.idThree = dreamteam1[2]
        newDreamTeam.idFour = dreamteam1[3]
        newDreamTeam.idFive = dreamteam1[4]

        

        
        
        
        
        
        
        return(
            <div>
            
            
                <input onChange={(e) => this.updateUserInput(e.target.value)} />
           
                <button onClick={() => this.saveTeam(newDreamTeam)}>Save Team</button>
                
           
           
           </div>
            
            
            
            


        )
    }
}

export default SaveButton