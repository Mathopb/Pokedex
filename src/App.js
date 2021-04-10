import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Pokemon from './components/Pokemon';
import styled from '@emotion/styled';
import axios from './config/Axios';

const Contenedor = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;



function App() {

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
    
  }, [pokemon.name])

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
    console.log(obtainedPokemon);
    console.log(result);
    setPokemon(obtainedPokemon);
  }
  

  return (

    <Contenedor>
      <Header

      />

      <Form
        setPokemonNameSearch={getPokemonByName}
      />

      <Pokemon 
        name = {pokemon.name}
        img = {pokemon.img}
        order = {pokemon.order}
        weight = {pokemon.weight}
        type = {pokemon.type}
        height = {pokemon.height}
        abilities = {pokemon.abilities}
        moves = {pokemon.moves}
      />

    </Contenedor>

  );
}

export default App;
