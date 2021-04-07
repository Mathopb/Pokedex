import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    margin: auto;
    display: block;
    text-align: center;
`;

const NameP = styled.h2`
    text-transform: capitalize;
`;

const Informacion = ({ name, img }) => {

    if(name === '') return null;

    return (
        <Container>
            <NameP>{name}</NameP>
            <img alt="Chupame la pija"
                src={img}
            />
        </Container>
    );
}

export default Informacion;