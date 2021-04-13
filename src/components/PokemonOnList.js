import React, { useEffect, useState } from 'react';
import axios from '../config/Axios';

const PokemonOnList = ({ name, index }) => {

    const [pokemon, setPokemon] = useState({});

    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPokemonByName = async () => {
            const result = await axios.get(`pokemon/${name}`);
            setPokemon(result.data);
            setIsLoading(false);
        }
        getPokemonByName();
    }, [name])

    if (isloading) {
        return (
            <tr key={index}>
                <th>...</th>
                <td>...</td>
            </tr>
        )
    }

    return (
        <tr key={index}>
            <td>
                <span><img src={pokemon.sprites.front_default} alt='Img de {pokemon.name}'/>
                </span> <span>{pokemon.id}</span>
            </td>
            <td><a href="!#">{pokemon.name}</a></td>
        </tr>
    );
}

export default PokemonOnList;