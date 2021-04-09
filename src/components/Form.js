import React, { useState } from 'react';
import styled from '@emotion/styled';

const SearhForm = styled.form`
    display: flex;
    justify-content: center;
`;

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
        <SearhForm
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


        </SearhForm>
    );
}

export default Form;