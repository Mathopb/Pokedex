import React from 'react';
import Information from '../Information';

const Pokemon = ({ name, img, order, weight, height, abilities, moves }) => {


    return (

        <div>
            <Information
                name={name}
                img={img}
                order={order}
                weight={weight}
                height = {height}
                abilities={abilities}
                moves={moves}
            />
        </div>

    );
}

export default Pokemon;