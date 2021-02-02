import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import NavBar from 'core/components/Navbar';
import Home from './pages/Home';
// TODO: MOVIES AND MovieDetails
// import MovieDetail from './pages/MovieDetail';
// import Movies from './pages/Movies';
import history from './core/utils/history';

const Routes = () => {
    return (
        <Router history={history}>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies" exact>
                    <Movies />
                </Route>
                <Route path="/movies/:movieId">
                    <h1>Detalhes do filme</h1>
                    {/* <MovieDetail /> */}
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;