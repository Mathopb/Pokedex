import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from '../../config/Axios';
import Information from '../Information';

const PokemonDetail = () => {

    let {nameorid} = useParams();

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
            // console.log(result);
            setPokemon(obtainedPokemon);
        }
        getPokemonByName(nameorid);
    }, [])

    const {name, img, order, weight, height, abilities, moves} = pokemon;

    return (
        <div>
            <Information
                name={name}
                img={img}
                order={order}
                weight={weight}
                height = {height}
                abilities={abilities}
                moves={moves}
            />
        </div>
    );
}

export default PokemonDetail;