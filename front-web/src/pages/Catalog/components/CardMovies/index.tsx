import React from 'react';
import { Movie } from 'core/types/Movies';
import './styles.css';

type Props = {
    movie: Movie;
}

const CardMovies = ({movie}: Props) => {
    return (
        <div className="catalog-content-card">
            <img 
                src={movie.imgUrl}
                alt="Movie"
                className="catalog-img"
            />
            <div className={"catalog-title"}>{movie.title}</div>
            <span className={"catalog-ano"}>{movie.year}</span>
            <h3 className={"catalog-subTitle"}>{movie.subTitle}</h3>
        </div>
    );
}

export default CardMovies;