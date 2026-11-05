//Окрема картка одного фільму.
import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import PosterPreview from "../PosterPreview.tsx";
import MovieInfo from "../MovieInfo.tsx";
import StarsRating from "../StarsRating.tsx";
import './MoviesListCard.css'

type MoviePropsType={
    movie:IMovie;
}

const MoviesListCard:FC<MoviePropsType> = ({movie}) => {

    return (
        <div className="movie-card">
            <p>ID: {movie.id}</p>
            <h3>{movie.title}</h3>

            <PosterPreview/>
            <MovieInfo/>
            {/*<GenreBadge/>*/}
            <StarsRating/>
        </div>
    );
};

export default MoviesListCard;
