import React from 'react'

function Card(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.skin_color}</h3>
            <h3>{props.hair_color}</h3>
            <h3>{props.height}</h3>
            <h3>{props.mass}</h3>
            
        </div>
    )
}

export default Card
