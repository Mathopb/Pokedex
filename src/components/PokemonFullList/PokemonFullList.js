import React, { useState, useEffect } from 'react';
import PokemonOnList from '../PokemonOnList';
import axios from '../../config/Axios';

const PokemonFullList = () => {

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

    const handleNext = () => {

        if ((offset + 25) > listmax) return;

        setOffset(offset + 25);

    }

    const handlePrev = () => {

        if (offset === 0) return;

        setOffset(offset - 25);

    }

    if (!pokemonlist) return null;

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemonlist.map(({ name }, index) => (

                            <PokemonOnList
                                key={index}
                                name={name}
                            />

                        ))
                    }
                </tbody>
            </table>

            <button
                onClick={handlePrev}
                type="button"
                className="btn btn-outline-secondary"
            >
                Preview
                </button>

            <button
                onClick={handleNext}
                type="button"
                className="btn btn-outline-secondary"
            >
                Next
                </button>
        </div>
    );
}

export default PokemonFullList;