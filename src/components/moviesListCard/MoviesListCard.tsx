//Окрема картка одного фільму.
import {type FC, useEffect, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import './MoviesListCard.css'
import MovieInfo from "../MovieInfo.tsx";
import PosterPreview from "../postrePreview/PosterPreview.tsx";
import StarsRating from "../StarsRating.tsx";


type MoviePropsType={
    movie:IMovie;

};

const MoviesListCard:FC<MoviePropsType> = ({movie}) => {
    //useState<string | null>(null) — створює стан для постера
    const [poster, setPoster] = useState< string | null>(null);
    //передаю рейтинг фільму в глядачів
    const [rating, setRating] = useState<number | null>(null);
    // передаю опис фільму про що він
    const [overview, setOverview] = useState<string >();
    //useEffect() — запускається після першого рендерингу.
    useEffect(() => {

        setPoster(movie.poster_path)//записує шлях до постера у стан.
        setOverview(movie.overview)
        setRating(movie.vote_average)

    }, [movie.poster_path,movie.overview,movie.vote_average]);// міняється адрес картинки


    return (
        <div className="movie-card">
            {
                poster && <PosterPreview poster_path={poster} id={movie.id} />

            }
            <h3>{movie.title}</h3>
            {/*{poster && ...} — перевіряє, чи є постер.
             <PosterPreview poster_path={poster}/> — передає постер дочірньому компоненту.*/}

            {
                overview &&  <MovieInfo overview={overview}/>
            }

            {/*/!*<GenreBadge/>*!/*/}

            {
                rating && <StarsRating vote_average={rating}/>
            }

        </div>
    );
};

export default MoviesListCard;
