import {useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {searchMovie} from "../../service/api.sevice.tsx";
import Header from "../Header.tsx";
import MoviesList from "../moviesList/MoviesList.tsx";
import SearchResults from "./SearchResults.tsx";


const SearchMovies = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);

    const [isSearching, setIsSearching] = useState(false);

    const searchMovieHandler = async (query: string) => {
        const response = await searchMovie(query);
           console.log(response.results);
        setMovies(response.results);
        setIsSearching(true);
    };

    return (
        <div>
            <Header onSearch={searchMovieHandler}/>

            {
                isSearching ? <SearchResults movies={movies}/> : <MoviesList/>
            }
        </div>
    );
};

export default SearchMovies;
