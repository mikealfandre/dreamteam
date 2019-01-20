import React from 'react'
import './PlayerCard.css'

const PlayerCard = (props) => {
    return(
        <div className="playercard">
            <h4>{props.firstName+ ' ' +props.lastName}</h4>
            <p id="abs3">{props.position}</p>
            <p id="abs2">{props.team}</p>
            <p id="absBottom">{props.country}</p>
        </div>
    )
}

export default PlayerCard