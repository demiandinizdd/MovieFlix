import React from 'react';
import { Movie } from 'core/types/Movies';
import './styles.css';

type Props = {
    film: Movie;
}

const CardMovies = ({film}: Props) => {
    return (
        <div className="catalog-content-card">
            <img 
                src={film.imgUrl}
                alt="film"
                className="catalog-img"
            />
            <div className={"catalog-title"}>{film.title}</div>
            <span className={"catalog-ano"}>{film.year}</span>
            <h3 className={"catalog-subTitle"}>{film.subTitle}</h3>
        </div>
    );
};

export default CardMovies;