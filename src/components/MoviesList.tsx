// тримує масив фільмів і передає їх для відображення.
import {useEffect, useState} from "react";
import type {IMovie} from "../models/IMovie.ts";


export const baseUrl='https://api.themoviedb.org/3/discover/movie'

export const appiService=


export const getMovies = async ():Promise<IMovie[]> => {
   const results=fetch(appiService('/movies'))
        .then((res) => res.json())
        console.log(results)
        return results;
}

const MoviesList = () => {
       const results= movies
    const [movies, setMovies] = useState<IMovie[]>([]);
    useEffect(() => {
        getMovies().then(movies =>
            console.log(movies)
            // setMovies(movies)
        );
    },[])


    return (
        <div>

        </div>
    );
};

export default MoviesList;
