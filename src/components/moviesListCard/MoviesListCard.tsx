//Окрема картка одного фільму.
import {type FC, useEffect, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import './MoviesListCard.css'
import MovieInfo from "../MovieInfo.tsx";
import PosterPreview from "../postrePreview/PosterPreview.tsx";
import StarsRating from "../StarsRating.tsx";


type MoviePropsType={
    movie:IMovie;
}

const MoviesListCard:FC<MoviePropsType> = ({movie}) => {
    //useState<string | null>(null) — створює стан для постера
    const [poster, setPoster] = useState< string | null>(null);
    const [overview, setOverview] = useState<string >();
    //useEffect() — запускається після першого рендерингу.
    useEffect(() => {
        setPoster(movie.poster_path)//записує шлях до постера у стан.
        setOverview(movie.overview)
    }, [movie.poster_path,movie.overview]);// міняється адрес картинки


    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            {/*{poster && ...} — перевіряє, чи є постер.
             <PosterPreview poster_path={poster}/> — передає постер дочірньому компоненту.*/}
            {
                poster && <PosterPreview poster_path={poster} />
            }
            {   overview &&  <MovieInfo overview={overview}/> }

            {/*/!*<GenreBadge/>*!/*/}
            <StarsRating/>
        </div>
    );
};

export default MoviesListCard;
