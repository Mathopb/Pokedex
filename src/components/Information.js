import React from 'react';
import styles from '../styles/Information.module.css';

const Information = ({ name, img, order, weight }) => {

    if (name === '') return null;

    return (
        <div className="row">
            <div className={`col s12 ${styles.contenedores}`}>
                <p className={styles.p}>Nombre: {name}</p>
            </div>

            <div className="row">

                <div className={`col s6 ${styles.contenedores}`}>
                    <img alt="Chupame la pija"
                        src={img}
                        className={styles.pokemonSprite}
                    />
                </div>
                <div className={`col s6 ${styles.contenedores}`}>

                <p className={styles.p}>Numero de Pokemon: {order}</p>
                <p className={styles.p}>El Pokemon Pesa promedio: {weight} Kg</p>

                </div>

            </div>

        </div>
    );
}

export default Information;