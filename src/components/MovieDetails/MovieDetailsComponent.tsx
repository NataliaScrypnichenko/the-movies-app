import './MovieDetails.css'
import {useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import {getMovieById} from "../../service/api.sevice.tsx";
import type {IMovieDetails} from "../../models/IMovieDetails.ts";
import PosterPreview from "../postrePreview/PosterPreview.tsx";


const MovieDetailsComponent = () => {
   const {id}= useParams();
    console.log(id);

    const [movie, setMovie] = useState<IMovieDetails>();

    //useState<string | null>(null) — створює стан для постера
    const [poster, setPoster] = useState< string | null>(null);

    useEffect(() => {
        if (id){
            getMovieById(+id)
                .then(value => {
                console.log(value)
                    setMovie(value)
                    setPoster(movie.poster_path)//записує шлях до постера у стан.
            })
        }
    }, [id,movie.poster_path]);

    // Перевіряємо, чи отримали дані про фільм
    if (!movie) {
        return <p>Loading...</p>;
    };

    return (
        <div>
            MovieDetailsComponent
            {
                poster && <PosterPreview poster_path={poster} id={movie.id} />
            }
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
                   <p>  Genres: {movie.genres
                       .map(genre => genre.name)
                       .join(", ")}
                   </p>
                </div>
            }
        </div>
    );
};

export default MovieDetailsComponent;
//На сторінці MovieDetailsPage ти зможеш отримати цей ID через useParams()
// і завантажити інформацію про конкретний фільм.
