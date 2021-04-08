import React, { useState, Fragment } from 'react';

const searchPokemon = (label, inicialState, options) => {

    const [state, setState] = useState(inicialState);

    const SelectSearch = () => (
        
        <Fragment>

            <label>
                {label}
            </label>

            <select
                onChange = {e => setState(e.target.value)}
                value={state}
            >

                <option value="">-- Seleccione --</option>
                {options.map (opcion => (
                    <option value="Nombre">{opcion.data.name}</option>
                ))}

            </select>
            
        </Fragment>

    );

    return [state, SelectSearch, setState];

}

export default searchPokemon;