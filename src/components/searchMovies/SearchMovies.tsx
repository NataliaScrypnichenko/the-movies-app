// отримуватиме пошуковий запит з URL, звертатиметься до API та зберігатиме результати.

import {useEffect, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {getGenresMovie, searchMovie} from "../../service/api.sevice.tsx";
import {useSearchParams} from "react-router-dom";
import SearchMovie from "./SearchMovie.tsx";
import type {IGenre} from "../../models/IGenre.ts";

const SearchMovies = () => {

    // Отримаю параметри з URL
    const [searchParams] = useSearchParams();

    // Дістаю назву фільму з параметра query та || "" означає: якщо параметра немає, використовуємо порожній рядок.
    const query = searchParams.get("query") || "";

    // Створюю стан для зберігання знайдених фільмів
    const [movies, setMovies] = useState<IMovie[]>([]);

    const [genres, setGenres] = useState<IGenre[]>([]);

    // завантажує жанри один раз
    useEffect(() => {
        getGenresMovie().then(value => {
            setGenres(value.genres);
        });
    }, []);


    // Виконуємо пошук, коли змінюється назва фільму
    useEffect(() => {

        // Якщо пошукового запиту немає, очищаємо список
        if (!query) {
            setMovies([]);
            return;
        }

        // Звертаємося до API та отримуємо знайдені фільми
        searchMovie(query).then(response => {
            setMovies(response.results);
        });

    }, [query]);

    return (
        <div>
            <SearchMovie movies={movies} genres={genres}/>
        </div>
    );
};

export default SearchMovies;
