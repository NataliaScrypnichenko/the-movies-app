import './MovieDetails.css'
import {useParams} from "react-router-dom";
import { useEffect, useState} from "react";
import {getMovieById} from "../../service/api.sevice.tsx";
import type {IMovieDetails} from "../../models/IMovieDetails.ts";
import PosterPreview from "../postrePreview/PosterPreview.tsx";


const MovieDetailsComponent = () => {
    // дістаю {id} щоб з ним працювати можна було б
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
                    setPoster(value.poster_path)//записує шлях до постера у стан.
            })
        }
    }, [id]);

    // Перевіряємо, чи отримали дані про фільм
    if (!movie) {
        return <p>Loading...</p>;
    };

    return (
        <div className="movie-details">
            <div className="movie-details-poster">
                {
                    poster && <PosterPreview poster_path={poster} id={movie.id} />
                }
            </div>

            <div className="movie-details-info">
                <h2>{movie.title}</h2>

                <p><strong>ID:</strong> {movie.id}</p>
                <p><strong>Original title:</strong> {movie.original_title}</p>
                <p><strong>Language:</strong> {movie.original_language}</p>
                <p><strong>Release date:</strong> {movie.release_date}</p>

                <p><strong>Overview:</strong> {movie.overview}</p>

                <p>
                    <strong>Genres:</strong>{" "}
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>

                <p><strong>Popularity:</strong> {movie.popularity}</p>
                <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                <p><strong>Votes:</strong> {movie.vote_count}</p>

                <p><strong>Adult:</strong> {movie.adult ? "Yes" : "No"}</p>
                <p><strong>Video:</strong> {movie.video ? "Yes" : "No"}</p>
                <p><strong>Backdrop:</strong> {movie.backdrop_path ? "Available" : "Not available"}</p>
            </div>
        </div>
    );
};

export default MovieDetailsComponent;
//На сторінці MovieDetailsPage ти зможеш отримати цей ID через useParams()
// і завантажити інформацію про конкретний фільм.
