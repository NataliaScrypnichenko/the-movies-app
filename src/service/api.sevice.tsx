import axios from "axios";
import type {IMovie} from "../models/IMovie.ts";
import type {IResponseMovieBases} from "../models/IResponseMovieBases.ts";
import type {IMovieDetails} from "../models/IMovieDetails.ts";
import type {IResponseGenreBases} from "../models/IResponseGenreBases.ts";


//https://api.themoviedb.org/3/genre/movie/list
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

// export const getMovie= async (): Promise<IMovie[]> => {
//     const {data:{results}} = await apiService.get<IResponseMovieBases>(`/discover/movie/`);
//     return  results
// }

// получити окремий фільм
export const getMovieById = async (id:number):Promise<IMovieDetails> => {
   const {data} =await apiService.get<IMovieDetails>(`/movie/${id}`);
    return data;

};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// вивести постери то бто картини
export const getPosterUrl =  (poster_path: string)=> {
  return  basePosterUrl + poster_path;
};

//Ищите фильмы по их оригинальным, переведенным и альтернативным названиям
// https://api.themoviedb.org/3/search/movie?query=

//рейтинг фильму поки не потрібно
export const getMoviePopular= async (ppopularity:number): Promise<IMovie> => {
     const {data} =await  apiService.get<IMovie>(`/discover/movie?popularity=${ppopularity}`);
     return data
};

//отримати жари
// Сервер сам повертає весь список жанрів. Тому параметр нам не потрібен.=async ()
// Promise — це обіцянка, що результат буде отриманий пізніше.
// А що означає IResponseGenreBases?
// Це твій інтерфейс TypeScript, який описує структуру відповіді сервера.
// Promise<IResponseGenreBases>означає:
// функція поверне Promise, результатом якого буде об'єкт типу IResponseGenreBases
// await apiService.get<IResponseGenreBases>('/genre/movie/list');
// Ми говоримо Axios:«Зроби GET-запит до сервера за адресою /genre/movie/list».
//GET — це метод HTTP, який використовується для отримання інформації.
// await Означає: дочекайся відповіді сервера, перш ніж виконувати наступний рядок
// <IResponseGenreBases>Це тип відповіді, який ми вказуємо для TypeScript.
// const {data} =Axios повертає об'єкт відповіді, в якому є багато властивостей. Нас зараз цікавить data,
// тому ми дістаємо її через деструктуризацію. У data знаходиться інформація, яку повернув сервер.
// Отримати список жанрів фільмів
export const getGenresMovie = async (): Promise<IResponseGenreBases> => {

    // Робимо GET-запит до сервера та чекаємо на відповідь
    const {data} = await apiService.get<IResponseGenreBases>('/genre/movie/list');

    // Повертаємо отримані дані
    return data;
};

// Отримати фільми за конкретним жанром
export const getMoviesByGenre = async (id: number,page:number):
    Promise<IResponseMovieBases> => {

    // Робимо запит до сервера, передаючи ID жанру і сторінку
    const {data} = await apiService.get<IResponseMovieBases>
    (`/discover/movie?with_genres=${id}&page=${page}`)
    // Повертаємо отримані фільми
    return data;
};

///search/movie?query=Batman — шукати фільми за назвою.

export const searchMovie=async (query:string): Promise<IResponseMovieBases> => {
   const {data} =await apiService.get<IResponseMovieBases>(`/discover/movie?query=${query}`);
   return data;
};
