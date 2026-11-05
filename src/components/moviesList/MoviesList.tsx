// тримує масив фільмів і передає їх для відображення.
import { useEffect, useState } from "react";
import type { IMovie } from "../../models/IMovie.ts";
import { getMovies } from "../../service/api.sevice.tsx";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";


export const MoviesList = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        getMovies().then(movies => {
            console.log(movies);
            setMovies(movies);
        });
    }, []);

    return (
        <div className="movies-list">
            {
                movies.map((movie) =>
                    <MoviesListCard key={movie.id} movie={movie}/>
                )
            }
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
