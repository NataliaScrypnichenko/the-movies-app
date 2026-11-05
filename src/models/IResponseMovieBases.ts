import type {IMovie} from "./IMovie.ts";

export interface IResponseMovieBases {
	page: number;
	results: IMovie[];
	total_pages: number;
	total_results: number;
};
// page — номер сторінки;
// results — масив фільмів;
// total_pages — кількість сторінок;
// total_results — загальна кількість фільмів.
