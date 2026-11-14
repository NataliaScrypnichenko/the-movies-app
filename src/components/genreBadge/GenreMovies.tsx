import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {getGenresMovie, getMoviesByGenre} from "../../service/api.sevice.tsx";
import type {IMovie} from "../../models/IMovie.ts";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";
import PaginationComponent from "../../pagination/PaginationComponent.tsx";
import "./GenreMovies.css"
import type {IGenre} from "../../models/IGenre.ts";

// Цей компонент буде отримувати ID із адреси та завантажувати фільми.
const GenreMovies = () => {
    const [query]=useSearchParams({page:'1'});
    // Отримуємо ID жанру з адреси
    const {id} = useParams();
    //стан для жанру
    const [genres, setGenres] = useState<IGenre[]>([]);
    // Створю стан для фільмів
    const [movies, setMovies] = useState<IMovie[]>([]);
    //знаходжу назву потрібного жанру
    //Що тут відбувається?
    // - find() шукає один елемент у масиві.
    // - genre.id — ID жанру з масиву.
    // - Number(id) — ID, який ми отримали через useParams(), перетворений на число.
    // - Коли ID збігаються, find() повертає потрібний жанр.
    const currentGenre = genres.find(genre => genre.id === Number(id));

    // фільми відповідно до ID жанру та номера сторінки
    useEffect(() => {

        let currentPage=Number(query.get('page') || 1);

        if (id) {
            // Тому що useParams() повертає параметри як рядки (string).то пишем плюс
            getMoviesByGenre(+id, currentPage)
                .then(value => {
                    // console.log(value.results)
                    setMovies(value.results);
                });
        }
    }, [id,query]);


// Отримую список жанрів
 useEffect(() => {
        getGenresMovie()
            .then(value => {
                setGenres(value.genres);
            });
    }, []);

    return (
        <div className="genre-movies">

            <h2>{currentGenre ? currentGenre.name + " Movies" : "Loading genre..."}</h2>

            <div className="genre-movies-list">
                {
                    movies.map(movie => (
                        <MoviesListCard key={movie.id} movie={movie}/>
                    ))
                }
            </div>

            <div className="genre-movies-pagination">
                <PaginationComponent/>
            </div>

        </div>
    );

};

export default GenreMovies;
