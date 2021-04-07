import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Informacion from './components/Informacion';
import styled from '@emotion/styled';
import axios from './config/Axios';

const Contenedor = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;



function App() {

  const [pokemon, setPokemon] = useState({

    name: '',
    img: '' 
  });

  useEffect(() => {
    
  }, [pokemon.name])

  const getPokemonByName = async (name) => {
    
    const result = await axios.get(`pokemon/${name}`);
    const obtainedPokemon = {
      name: result.data.name,
      img: result.data.sprites.front_default
    }
    console.log(obtainedPokemon);
    setPokemon(obtainedPokemon);
  }

  return (

    <Contenedor>
      <Header

      />

      <Form
        setPokemonNameSearch={getPokemonByName}
      />

      <Informacion 
        name = {pokemon.name}
        img = {pokemon.img}
      />

    </Contenedor>

  );
}

export default App;
