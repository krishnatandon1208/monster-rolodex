import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={props.monster.name} />
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
}

