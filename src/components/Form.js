import React, { useState } from 'react';

const Form = ({ setPokemonNameSearch }) => {

    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    const handleName = e => {
        setName(
            e.target.value

        );
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (name.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        setPokemonNameSearch(name);
    }


    return (
        <form
            onSubmit={handleSubmit}
        >

            <input
                type='text'
                name='pokemon'
                value={name}
                onChange={handleName}
            />
            <button>apretame puto</button>

            {error
                ? <p>Se requiere un nombre</p>
                : null
            }


        </form>
    );
}

export default Form;