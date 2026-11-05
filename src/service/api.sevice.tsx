import axios from "axios";
import type {IMovie} from "../models/IMovie.ts";

export const token=import.meta.env.VITE_TMDB_TOKEN

export const baseUrl='https://api.themoviedb.org/3'


export const apiService = axios.create({
    baseURL:baseUrl,
    headers:{
        'accept':' application/json',
        'Authorization': `Bearer ${token}`,
    },
});

export const getMovies = async ():Promise<IMovie[]> => {
    const response= await apiService.get('/discover/movie');

    return response.data.results;
};
