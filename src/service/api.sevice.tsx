import axios from "axios";
import type {IMovie} from "../models/IMovie.ts";
import type {IResponseMovieBases} from "../models/IResponseMovieBases.ts";

export const token=import.meta.env.VITE_TMDB_TOKEN

export const baseUrl='https://api.themoviedb.org/3'

//вивести постери, тому що вони беруться з іншої адреса
export const basePosterUrl="https://image.tmdb.org/t/p/w500"

export const apiService = axios.create({
    baseURL:baseUrl,
    headers:{
        'accept':'application/json',
        'Authorization': `Bearer ${token}`,
    },
});

//Отримаю фільми з конкретної сторінки
export const getMoviesPage = async (page: number): Promise<IMovie[]>  => {
    const {data:{results}} = await apiService.get<IResponseMovieBases>(`/discover/movie?page=${page}`);
    return  results
};


// получити окремий фільм
export const getMovieById = async (id:number):Promise<IMovie> => {
   const {data} =await apiService.get<IMovie>(`/movie/${id}`);
    return data

};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// вивести постери то бто картини
export const getPosterUrl =  (poster_path: string)=> {
  return  basePosterUrl + poster_path;
};

//Ищите фильмы по их оригинальным, переведенным и альтернативным названиям
// https://api.themoviedb.org/3/search/movie





