import React, { useEffect, useState } from 'react';
import axios from '../../config/Axios';

const MoveSet = ({moveset, index}) => {

    const [move, setMove] = useState({});

    useEffect (() => {

        const getMoveByName = async () => {
            const result = await axios.get(`move/${moveset}`);
            const obtainedMove = {
                name: result.data.name,
                power: result.data.power,
                pp: result.data.pp,
                type:result.data.type.name
            }
            setMove(obtainedMove);
        }
        getMoveByName();

    }, [moveset]);

    const {name, power, pp, type} = move;

    return ( 
        <tr key={index}>
            <td>
                <span>{name}</span>
            </td>
            <td>
                <span>{power}</span>
            </td>
            <td>
                <span>{pp}</span>
            </td>
            <td>
                <span>{type}</span>
            </td>
        </tr>
     );
}
 
export default MoveSet;