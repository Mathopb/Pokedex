import React from 'react';
import styled from '@emotion/styled';

const Cabezal = styled.div`
    background-color: red;
    margin: auto;
    padding: 10px;
    text-align: center;
    color: white;
`;


const Header = () => {
    return ( 
        <Cabezal>
            <h1>Pokedex</h1>
        </Cabezal>
     );
}
 
export default Header;