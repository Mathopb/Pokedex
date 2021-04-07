import React, { useState } from 'react';


const Form = ({ setPokemonNameSearch }) => {

    const [name, setName] = useState('');

    const handleName = e => {
        setName(
            e.target.value
        );
    }

    const handleSubmit = e => {
        e.preventDefault();
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
        </form>
    );
}

export default Form;