import React, { useState, useEffect } from 'react';
import axios from '../config/Axios';

const usePokemon = name => {

    const [pokemon, setPokemon] = useState({
        name: '',
        img: '',
        order: '',
        weight: '',
        height: '',
        abilities: '',
        moves: ''
    });

    useEffect(() => {
        getPokemonByName(this.name);
        return () => {
            
        }
    }, [pokemon])

    const getPokemonByName = async (name) => {

        const result = await axios.get(`pokemon/${name.toLowerCase()}`);
        const obtainedPokemon = {
            name: result.data.name,
            img: result.data.sprites.other['official-artwork'].front_default,
            order: result.data.order,
            weight: result.data.weight,
            height: result.data.height,
            abilities: result.data.abilities,
            moves: result.data.moves
        }
        // console.log(obtainedPokemon);
        console.log(result);
        setPokemon(obtainedPokemon);
    }
    return [pokemon];

}

export default usePokemon;