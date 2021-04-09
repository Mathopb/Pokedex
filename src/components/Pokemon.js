import React from 'react';
import Information from './Information';

const Pokemon = ({ name, img, order, weight }) => {


    return (

        <Information 
            name={name}
            img={img}
            order={order}
            weight = {weight}
        />

    );
}

export default Pokemon;