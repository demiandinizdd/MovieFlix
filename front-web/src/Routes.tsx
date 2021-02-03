import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// TODO: MovieDetails
// import MovieDetail from './pages/MovieDetail';
import history from './core/utils/history';
import Catalog from 'pages/Catalog';

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
                    <h1>Detalhes do filme</h1>
                    {/* <MovieDetail /> */}
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;