import './MovieDetails.css'
import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {useLocation} from "react-router-dom";


type PropsTypeMovieDetails={
   movie:IMovie;
}


const MovieDetailsComponent:FC<PropsTypeMovieDetails> = () => {

    const {state} = useLocation();
    const movie=state as IMovie
    return (
        <div>
            {
                <div>
                    <p>ID: {movie.id}</p>
                    <h2>{movie.title}</h2>
                    <p>Original title: {movie.original_title}</p>
                    <p>Language: {movie.original_language}</p>
                    <p>Overview: {movie.overview}</p>
                    <p>Release date: {movie.release_date}</p>
                    <p>Popularity: {movie.popularity}</p>
                    <p>Rating: {movie.vote_average}</p>
                    <p>Votes: {movie.vote_count}</p>
                    <p>Adult: {movie.adult ? "Yes" : "No"}</p>
                    <p>Video: {movie.video ? "Yes" : "No"}</p>
                    <p>Genres: {movie.genre_ids.join(", ")}</p>
                </div>
            }
        </div>
    );
};

export default MovieDetailsComponent;
//На сторінці MovieDetailsPage ти зможеш отримати цей ID через useParams()
// і завантажити інформацію про конкретний фільм.
