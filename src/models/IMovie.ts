

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
// 3. Підсумкова таблиця
// Поле	Тип	Для чого потрібне
// adult	boolean	Фільм для дорослих чи ні
// backdrop_path	string	Фонове зображення
// genre_ids	number[]	ID жанрів
// id	number	ID фільму
// title	string	Назва фільму
// original_language	string	Мова оригіналу
// original_title	string	Оригінальна назва
// overview	string	Опис фільму
// popularity	number	Популярність
// poster_path	string	Постер
// release_date	string	Дата виходу
// video	boolean	Ознака відеозапису
// vote_average	number	Середня оцінка
// vote_count	number	Кількість голосів
