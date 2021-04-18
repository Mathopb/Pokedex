import React from 'react';
import styles from '../../styles/Information.module.css';

const Information = ({ name, img, order, weight, height, abilities, moves }) => {

    if (name === '') return null;

    return (
        <div className="container">
            <div className="row">
                <div className={`col-sm-12 ${styles.contenedores}`}>
                    <h1 className={styles.pokemonName}>Nombre: {name}</h1>
                </div>

                <div className="row">

                    <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.contenedores}`}>
                        <img alt="Imagen del Pokemon"
                            src={img}
                            className={styles.pokemonSprite}
                        />
                    </div>
                    <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.contenedores}`}>
                        <h4 className="text-center">Data Basica</h4>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="col">Numero de Pokemon:</th>
                                    <td>{order}</td>
                                </tr>
                                <tr>
                                    <th scope="col">Peso Promedio:</th>
                                    <td>{weight} kg</td>
                                </tr>
                                <tr>
                                    <th scope="col">Altura Promedio:</th>
                                    <td>{height} m</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className={`col-sm-12 col-md-6 col-lg-4 ${styles.contenedores}`}>
                        <h3 className="text-center">Abilidades Nativas</h3>
                        <ul>
                            {abilities.map((item, index) => (
                                <li className={styles.listAbilities} key={index}>{item.ability.name}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="row">
                    <div className={`col-sm-12 ${styles.contenedores}`}>
                        <p className={styles.p}>Aca van las Evoluciones</p>
                    </div>
                </div>

                <div className="row">
                    <div className={`col-sm-12 ${styles.contenedores}`}>
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
        </div>
    );
}

export default Information;