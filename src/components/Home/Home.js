import React, { Fragment, useState } from 'react';
import Form from '../Form';
import Pokemon from '../Pokemon';
import PokemonFullList from '../PokemonFullList';
import axios from '../../config/Axios';

const Home = () => {

    const [pokemon, setPokemon] = useState({

        name: '',
        img: '',
        order: '',
        weight: '',
        height: '',
        abilities: '',
        moves: ''
      });      
    
    
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
    
    
      const resetSearch = () => {
    
        setPokemon({
          name: '',
          img: '',
          order: '',
          weight: '',
          height: '',
          abilities: '',
          moves: ''
        });
    
      }

    return (

        <Fragment>

            <Form
                setPokemonNameSearch={getPokemonByName}
                resetSearch={resetSearch}
            />

            <Pokemon
                name={pokemon.name}
                img={pokemon.img}
                order={pokemon.order}
                weight={pokemon.weight}
                type={pokemon.type}
                height={pokemon.height}
                abilities={pokemon.abilities}
                moves={pokemon.moves}
            />

            {pokemon.name === '' &&
                <PokemonFullList

                />
            }

        </Fragment>

    );
}

export default Home;