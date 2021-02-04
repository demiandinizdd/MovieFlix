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
            .then(response => setGenres(response.data.content))
    }, [])

    const handleChangeGenre = (genre: Genre) => {
        setGenre(genre);
        onSearch({ genreId: genre?.id })
    }

    return (
        <div className="filters-container">
            <div className="filters-text">
                <Select options={genres}
                    name="Genre"
                    key={`select-${genre?.id}`}
                    inputId="genries"
                    getOptionLabel={(option: Genre) => option.name}
                    getOptionValue={(option: Genre) => String(option.id)}
                    classNamePrefix="catalog-select"
                    placeholder="Gêneros"
                    onChange={value => handleChangeGenre(value as Genre)}
                />
            </div>
        </div>
    );
}

export default CatalogFilters;