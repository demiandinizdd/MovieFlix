import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './core/utils/history';
import Home from './pages/Home';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/Catalog/components/MovieDetails';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies" exact>
                    <Catalog />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetails />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;