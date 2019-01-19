import React from 'react'
import './PlayerCard.css'

const PlayerCard = (props) => {
    return(
        <div className="playercard">
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.country}</p>
        </div>
    )
}

export default PlayerCard