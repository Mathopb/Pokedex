import React from 'react';
import PokemonOnList from './PokemonOnList';

const PokemonFullList = ({ pokemons, handlePrev, handleNext }) => {



    if (!pokemons) return null;

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
                        pokemons.map(({ name }, index) => (

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