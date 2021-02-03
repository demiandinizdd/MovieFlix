import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonLogout from 'core/components/ButtonLogout';
import Navbar from 'core/components/Navbar';
import { MoviesResponse} from 'core/types/Movies';
import { makePrivateRequest } from 'core/utils/request';
import MoviesCatalogLoaders from './components/Loaders/MoviesCatalogLoaders';
import CardMovies from './components/CardMovies';
import './styles.css';

// TODO: Pagination and Filters
// import Pagination from 'core/components/Pagination';
// import FiltersMovies, {FilterForm} from './components/FiltersMovies';

const Catalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    // const [activePage, setActivePage] = useState(0);
    
    // TODO FILTERS
    // const getMovie = useCallback((filter?: FilterForm) => {
    //     const params = {
    //         page: activePage,
    //         size: 4,
    //         genreId: filter?.genreId
    //     }
    //     setIsLoading(true);
    //     makePrivateRequest({ url: '/movies', params })
    //         .then(response => setMoviesResponse(response.data))
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // }, [activePage]);

    const getMovie = useCallback(() => {
        const params = {
            size: 4
        }
        setIsLoading(true);
        makePrivateRequest({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    // const getMovie = useCallback(() => {
    //     const params = {
    //         page: activePage,
    //         size: 4
    //     }
    //     setIsLoading(true);
    //     makePrivateRequest({ url: '/movies', params })
    //         .then(response => setMoviesResponse(response.data))
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // }, [activePage]);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <div className="catalog-container">
                {/* TODO FILTERS */}
                {/* <FiltersMovies onSearch={filter => getFilms(filter)} /> */}
                <div className="catalog-container-card">
                    {isLoading ? <MoviesCatalogLoaders /> : (
                        moviesResponse?.content.map(movie => (
                            <Link to={`/movies/${movie.id}`}>
                                <CardMovies movie={movie} key={movie.id} />
                            </Link>
                        ))
                    )}
                </div>
            </div>
            {/* TODO PAGINATION */}
            {/* {filmsResponse && <Pagination
                totalPages={filmsResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)}
            />} */}
        </>
    );
};

export default Catalog;