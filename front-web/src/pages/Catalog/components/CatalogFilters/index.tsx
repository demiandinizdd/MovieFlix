import React, { useEffect } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { Genre } from 'core/types/Movies';
import { makePrivateRequest } from 'core/utils/request';
import './styles.css';

export type FilterForm = {
    genreId?: number;
}

type Props = {
    onSearch: (filter: FilterForm) => void;
}

const CatalogFilters = ({ onSearch }: Props) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [genre, setGenre] = useState<Genre>();
    
    useEffect(() => {
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data));
        }
    , [])

    const handleChangeGenre = (genre: Genre) => {
        setGenre(genre);
        onSearch({ genreId: genre?.id });
    }
    
    if (!genres.find(o => o.id === 0)) {
        genres.push({"id": 0, "name": "TODOS OS GÊNEROS"});
        genres.sort((x, y) => x.id - y.id);
    }

    return (
        <div className="filters-container">
            <Select
                className="text-secondary"
                options={genres}
                name="Genre"
                key={`select-${genre?.id}`}
                inputId="genres"
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                classNamePrefix="catalog-select"
                placeholder={(genre?.id===null) ? "SELECIONE O GÊNERO" : genre?.name}
                onChange={value => handleChangeGenre(value as Genre)}
            />
        </div>
    );
}

export default CatalogFilters;