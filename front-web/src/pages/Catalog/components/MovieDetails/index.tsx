import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from 'core/components/Navbar';
import ButtonLogout from 'core/components/ButtonLogout';
import { makePrivateRequest } from 'core/utils/request';
import { isAllowedByRole } from 'core/utils/auth';
import { Movie } from 'core/types/Movies';
import CardDetails from './components/CardDetails';
import CardComments from './components/CardComments';
import CardEvaluations from './components/CardEvaluations';
import MovieDetailsLoaders from '../Loaders/MovieDetailsLoaders';
import MovieCommentsLoaders from '../Loaders/MovieCommentsLoaders';
import './styles.css';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movieResponse, setMovieResponse] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => {
                setMovieResponse(response.data);
            })
            .finally(() => setIsLoading(false));
    }, [movieId])

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <Link to="/movies" className="back-container">
                <h3 className="back-text"> Voltar </h3>
            </Link>
            {isLoading ? <MovieDetailsLoaders/> : (
                <CardDetails />
            )}
            {  isLoading ? <MovieCommentsLoaders/> : (
                
                isAllowedByRole(['ROLE_MEMBER']) &&
                <CardComments id={movieId}/>
            )}
            <div className="evaluations-container">
                {movieResponse?.reviews.map(review => (
                    <CardEvaluations
                        key={review.id}
                        textReview={review.text}
                        autorReview={review.userName}
                    />
                ))}
            </div>
        </>
    );
}

export default MovieDetails;