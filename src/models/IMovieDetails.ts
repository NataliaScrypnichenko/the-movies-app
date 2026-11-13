import type {IGenre} from "./IGenre.ts";

export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    genres: IGenre[];
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
