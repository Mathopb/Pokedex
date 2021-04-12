import React from 'react';

const PokemonFullList = ({ pokemons, handlePrev, handleNext }) => {

    if(!pokemons) return null;

    return (
        <>
            {
                pokemons.map(({ name }, index) => (
                    <div
                        key={index}
                    >
                        <a
                            href="!#"
                        >
                            {name}
                        </a>
                    </div>
                ))
            }

            <button
                onClick={handlePrev}
            >
                no-next
            </button>

            <button
                onClick={handleNext}
            >
                next
            </button>
        </>
    );
}

export default PokemonFullList;