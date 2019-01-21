import React, {Component} from 'react'
import axios from 'axios'

const DeleteTeam = () => {
    axios.delete(`/api/teams?id=${id}`)
    .then((response) => {
        this.setState({
            
        })
    })
}

return(

    




)