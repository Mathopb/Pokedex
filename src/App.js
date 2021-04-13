import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Pokemon from './components/Pokemon';
import PokemonFullList from './components/PokemonFullList';
import axios from './config/Axios';


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

  const [offset, setOffset] = useState(0);
  const [listmax, setListMax] = useState(0);
  const [pokemonlist, setPokemonList] = useState([]);

  useEffect(() => {

    const getAllPokemons = async () => {
      const result = await axios.get(`pokemon?limit=25&offset=${offset}`);

      setPokemonList(result.data.results);



      setListMax(result.data.count);
    }
    getAllPokemons();

  }, [offset])

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

  const handleNext = () => {

    if ((offset + 25) > listmax) return;

    setOffset(offset + 25);

  }

  const handlePrev = () => {

    if (offset === 0) return;

    setOffset(offset - 25);

  }

  const resetSearch = () => {

    setOffset(0);

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

    <div className="container">
      <Header

      />

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
          pokemons={pokemonlist}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      }

    </div>

  );
}

export default App;
