import React from 'react';
import MoveSet from '../MoveSet';

const MovesList = ({ moves }) => {


    return (
        <div>
            <p>Aca van el Array de poderes</p>
            <table className="table">
                <thread>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Power</th>
                        <th scope="col">PP</th>
                        <th scope="col">Type</th>
                    </tr>
                </thread>
                <tbody>
                    {moves.map((moveset, index) => (

                        <MoveSet
                            key={index}
                            moveset={moveset.move.name}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovesList;