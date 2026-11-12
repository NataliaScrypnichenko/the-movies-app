import axios from "axios";
import type {IMovie} from "../models/IMovie.ts";
import type {IResponseMovieBases} from "../models/IResponseMovieBases.ts";


export const token=import.meta.env.VITE_TMDB_TOKEN

export const baseUrl='https://api.themoviedb.org/3/discover'

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
    const {data:{results}} = await apiService.get<IResponseMovieBases>(`/movie?page=${page}`);
    return  results
};

// export const getMovie= async (): Promise<IMovie[]> => {
//     const {data:{results}} = await apiService.get<IResponseMovieBases>(`/discover/movie/`);
//     return  results
// }

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

//рейтинг фильму поки не потрібно
export const getMoviePopular= async (ppopularity:number): Promise<IMovie> => {
     const {data} =await  apiService.get<IMovie>(`/discover/movie?popularity=${ppopularity}`);
     return data
};

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.
//      eyJhdWQiOiI3MGM3MTU2ODkwNDgzNDJmY2RiYmEyMTE2OWViZGJlMSIsIm5iZiI6MTc5MzcwODIyNi41OTEsInN1YiI6IjZhZTlkMGMyYmZkZDc1MTQ2OWJhNDRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.
//      YHqcNm98nbsKF_GDc_1ywhLr59yanqNviZxzxtHFvo0' \
//      --header 'accept: application/json'
