import React from 'react';
import styles from '../styles/Information.module.css';

const Information = ({ name, img, order, weight, height, abilities, moves }) => {

    if (name === '') return null;

    return (
        <div className="row">
            <div className={`col s12 ${styles.contenedores}`}>
                <p className={styles.p}>Nombre: {name}</p>
            </div>

            <div className="row">

                <div className={`col s12 m6 l4 ${styles.contenedores}`}>
                    <img alt="Chupame la pija"
                        src={img}
                        className={styles.pokemonSprite}
                    />
                </div>
                <div className={`col s12 m6 l4 ${styles.contenedores}`}>
                    <h4>Data Basica</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Numero de Pokemon:</th>
                                <td>{order}</td>
                            </tr>
                            <tr>
                                <th>Peso Promedio:</th>
                                <td>{weight} kg</td>
                            </tr>
                            <tr>
                                <th>Altura Promedio:</th>
                                <td>{height} m</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className={`col s12 m6 l4 ${styles.contenedores}`}>
                    <h3>Abilidades Nativas</h3>
                    <ul>
                        {abilities.map((item, index) => (
                            <li key={index}>{item.ability.name}</li> 
                        ))}
                    </ul>
                </div>

            </div>

            <div className="row">
                <div className={`col s12 ${styles.contenedores}`}>
                    <p className={styles.p}>Aca van las Evoluciones</p>
                </div>
            </div>

            <div className="row">
                <div className={`col s12 ${styles.contenedores}`}>
                    <p className={styles.p}>Aca van el Array de poderes</p>
                    <ul>
                        {moves.map((item, index) => (
                            <li key={index}>
                                <a href="www.google.com">{item.move.name}</a>
                            </li> 
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Information;