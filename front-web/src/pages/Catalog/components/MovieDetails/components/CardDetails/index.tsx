import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'core/types/Movies';
import { makePrivateRequest } from 'core/utils/request';
import './styles.css';

type ParamsType = {
    movieId: string;
}

const CardDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    
    useEffect(() => {
        makePrivateRequest({url:`/movies/${movieId}`})
        .then(response => setMovie(response.data));
    }, [movieId]);

    return (
        <div className="movie-container">
            <img src={movie?.imgUrl} alt={movie?.title} className="movie-img" />
            <div className="movie-content">
                <div className={"movie-title"}>{movie?.title}</div>
                <span className={"movie-year"}>{movie?.year}</span>
                <h3 className={"movie-subTitle"}>{movie?.subTitle}</h3>
                <div className={"movie-description"}>
                    <p className={"movie-text"}>
                        {movie?.synopsis}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;