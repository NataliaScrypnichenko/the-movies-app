//тільки відображатиме картки знайдених фільмів.
import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";
import "../moviesList/MoviesList.css";

type PropsType = {
    movies: IMovie[];
};

const SearchMovie: FC<PropsType> = ({movies}) => {
    return (
        <div className="movies-list">
            {movies.map((movie) =>
                <MoviesListCard key={movie.id} movie={movie}/>
            )}
        </div>
    );
};

export default SearchMovie;
//movies — масив фільмів, отриманих після пошуку.
// map() перебирає цей масив.
// MoviesListCard — та сама картка, яка використовується у звичайному списку.
// CSS підключаємо той самий, щоб картки виглядали однаково.
