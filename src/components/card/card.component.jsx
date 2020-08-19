import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    return (
        <div>
            {props.monster.name}
        </div>
    )
}