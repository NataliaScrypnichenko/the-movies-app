// тримує масив фільмів і передає їх для відображення.

import { useEffect, useState } from "react";
import type { IMovie } from "../../models/IMovie.ts";
import type { IGenre } from "../../models/IGenre.ts";
import { getMoviesPage, getGenresMovie } from "../../service/api.sevice.tsx";
import './MoviesList.css'
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import {useSearchParams} from "react-router-dom";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";

export const MoviesList = () => {

    const [query]=useSearchParams({page:'1'});

    const [movies, setMovies] = useState<IMovie[]>([]);

    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        let currentPage=Number(query.get('page') || 1);

        getMoviesPage(currentPage).then((movies) => {
            setMovies(movies);
        });
    }, [query]);

    useEffect(() => {
        getGenresMovie().then(value => {
            setGenres(value.genres);
        });
    }, []);

    return (
        <div className="movies-list">
            {
                movies.map((movie) =>
                    <MoviesListCard
                        key={movie.id}
                        movie={movie}
                        genres={genres}
                    />
                )
            }
            <PaginationComponent/>
        </div>
    );
};

export default MoviesList;

// Згідно із завданням, MoviesList:
// - отримує масив фільмів;
// - перебирає масив;
// - передає кожен фільм у MoviesListCard;
// - відображає список карток.
//Наступним кроком надішли свій MoviesList.tsx. Перевіримо,
// як ти отримуєш масив фільмів і як передавати кожен фільм у MoviesListCard.
