import React, { Fragment } from 'react';
import Header from '../Header';
import Home from '../Home';
import {
    Switch,
    Route
} from "react-router-dom";
import { HOME, PINFOMATION } from '../../routes/routes';
import PokemonDetail from '../PokemonDetail';


const Layout = () => {



    return (

        <Fragment>

            <header>
                <Header />
            </header>

            <main>
                <Switch>
                    <Route exact path={HOME} component={Home} />
                    <Route exact path={PINFOMATION} component={PokemonDetail} />
                </Switch>
            </main>

            <footer>

            </footer>

        </Fragment>

    );
}

export default Layout;