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
    // sortOrderMovie - зберігає вибраний напрямок сортування.
    //  setSortOrderMovies- змінює цей напрямок,useState<string>(" ")-початкове значення порожнє, тобто
    //  фільми спочатку показуються у звичайному порядку.
    const [sortOrderMovies, setSortOrderMovies] = useState<string>(" ");

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

    //створюю сортувальний масив.[...movies]-копія мвсива тому що sort змінює початковий масив
    const sortedMovies=[...movies].sort((a,b)=>{
        //від більшого до меншого.
        if(sortOrderMovies ==='max'){
          return  b.vote_average-a.vote_average
        }
        // від меншого до більшого.
        if (sortOrderMovies==='min'){
            return  a.vote_average-b.vote_average
        }
        //якщо сортуванн яне вибрано то залишаеться початковий стан
        return 0;
    })


    return (
        <div className="movies-list">
            <div className="sort-buttons">
                <button onClick={() => setSortOrderMovies("max")}>
                    Rating ↓
                </button>

                <button onClick={() => setSortOrderMovies("min")}>
                    Rating ↑
                </button>
            </div>

            {
                sortedMovies.map((movie) =>
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
