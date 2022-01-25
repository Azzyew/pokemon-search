import React from 'react';
import './styles.css';

const PokemonCard = (poke) => {
    return(
        <div className='card'>
            <h3>{poke.name}</h3>
        </div>
    )
}

export default PokemonCard
