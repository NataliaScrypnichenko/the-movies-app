// Показує жанр у вигляді невеликої позначки.

import {Link} from "react-router-dom";
import type {IGenre} from "../../models/IGenre.ts";
import type {FC} from "react";
// описує два значення, які компонент отримує від батьківського компонента.
type PropsType = {
    genre_ids: number[];//масив ID жанрів конкретного фільму.
    genres: IGenre[];//масив усіх жанрів із TMDB.
};

const GenreBadge: FC<PropsType> = ({genre_ids, genres}) => {
//filter() — відбирає тільки ті жанри, ID яких є у фільмі.
    //includes() — перевіряє, чи є ID жанру в масиві genre_ids.
    const movieGenres = genres.filter(genre =>
        genre_ids.includes(genre.id)
    );

    return (
        <div>
            <div className="genreBadge">
                {
                    movieGenres.map(genre => (
                        <Link key={genre.id} to={"/genre/" + genre.id}>
                            {genre.name}
                        </Link>
                    ))

                }
            </div>
        </div>
    );
};

export default GenreBadge;
//genre — поточний жанр із масиву.
// genre.id — ID цього жанру.
// "/genre/" + genre.id — формує адресу сторінки.
// genre.name — показує назву жанру.
