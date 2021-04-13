import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const Form = ({ setPokemonNameSearch, resetSearch }) => {

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
        <>
            <form
                onSubmit={handleSubmit}
                className={styles.formStyle}
            >

                <input
                    type='text'
                    name='pokemon'
                    value={name}
                    onChange={handleName}
                    className={styles.searchInput}
                />
                <button
                    className="btn btn-success text-white"
                >Buscar</button>



                {error
                    ? <p className="text-center text-white alert alert-primary">Se requiere un nombre</p>
                    : null
                }


            </form>

            <button
                className="btn btn-danger text-white"
                onClick={resetSearch} 
            >Home</button>
        </>
    );
}

export default Form;