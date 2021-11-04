// import React from 'react'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Axios = () => {
    const [pokemon, setPokemon] = useState(null);
    const [buttonPress, setButtonPress] = useState(false);

    // Checking whether or not the button has pressed and changing the value of the buttonPress boolean
    const handleButton = () => {
        if (!buttonPress) {
            setButtonPress(true) 
        } else { setButtonPress(false)}
    }

    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
        .then(response=>{setPokemon(response.data.results)})
    }, []);

    


    return (
        <div>
            <button onClick={handleButton}>Fetch Pokemon</button>
            {

                buttonPress ? 
                <div>

                {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
                    return (<div key={index}>{pokemon.name}</div>)
                }
                )}
                </div>:<p>Please press the button to the see the pokemon names</p>
            }
            
        </div>
    )
}

export default Axios
