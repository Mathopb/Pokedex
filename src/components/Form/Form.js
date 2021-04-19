import React, { useState } from 'react';
import styles from '../../styles/Form.module.css';

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
        <div className={styles.principalContainer}>

            <div>
                <button
                    className="btn btn-danger text-white"
                    onClick={resetSearch}
                >Home</button>
            </div>

            <div>
                <form
                    onSubmit={handleSubmit}
                // className={styles.formStyle}
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

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {/* <p className="dropdown-item" >Nombre o Num</p>
                            <p className="dropdown-item" >MoveSet</p> */}
                            <div className="form-check dropdown-item">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    value="option1"
                                />
                                <label
                                    className="form-check-label"
                                    for="exampleRadios1"
                                >Nombre o Num
                                </label>
                            </div>

                            <div className="form-check dropdown-item">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    value="option1"
                                />
                                <label
                                    className="form-check-label"
                                    for="exampleRadios1"
                                >MoveSet
                                </label>
                            </div>

                        </div>
                    </div>

                    {error
                        ? <p className="text-center text-white alert alert-primary">Se requiere un nombre</p>
                        : null
                    }


                </form>
            </div>

        </div>
    );
}

export default Form;