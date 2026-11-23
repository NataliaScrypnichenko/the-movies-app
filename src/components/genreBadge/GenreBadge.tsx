// Показує жанр у вигляді невеликої позначки.
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IGenre} from "../../models/IGenre.ts";
import {getGenresMovie} from "../../service/api.sevice.tsx";
//компонент отримує дані ? є не обов'язковим
type PropsType = {
    genre_ids?: number[];
    genres?: IGenre[];
};
//деструктуризовую дані
const GenreBadge = ({genre_ids, genres}: PropsType) => {
    //створюю стан зберігання всіх жанрів allGenres — змінна, у якій зберігаються жанри.
    // setAllGenres — функція, за допомогою якої ми змінюємо стан.
    // useState<IGenre[]>([]) — створюємо стан із початковим порожнім масивом.
    const [allGenres, setAllGenres] = useState<IGenre[]>([]);
//завантажую інформацію з арі
    useEffect(() => {
        //!genres = якщо genres немає (тобто він дорівнює undefined).
        if (!genres) {
            //getGenresMovie() — наша функція, яка звертається до TMDB API.then() — отримує результат після завершення запиту.
            //value — отримані дані.value.genres — масив жанрів.setAllGenres() — записуємо жанри в наш стан.
            getGenresMovie().then(value => {
                setAllGenres(value.genres);
            });
        }
    }, [genres]);//Це масив залежностей.Якщо genres змінюється, ефект виконується знову.
//вибираю потрыбны жанри
    const currentGenres = genre_ids
        //умова ? значення_якщо_так= то означаэ що використовується в картці конкретного фільму.
        //filter()-Перебирає всі жанри й залишає тільки ті, ID яких є в genre_ids.
        //includes() перевіряє, чи міститься ID у масиві.
        ? (genres || []).filter(genre => genre_ids.includes(genre.id))
        //  : значення_якщо_ні то використовую allGenres який завантажуэ через API.
        : genres || allGenres;

    return (
        <div>
            <div className="genreBadge">
                {
                    currentGenres.map(genre => (
                        genre_ids
                            //Якщо є genre_ids, значить компонент використовується в картці фільму —
                            // показуємо <span> з назвою.
                            ? <span key={genre.id}>{genre.name}</span>
                            //Якщо genre_ids немає, значить це головна сторінка — показуємо <Link>.
                            : <Link key={genre.id} to={"/genre/" + genre.id}>
                                {genre.name}
                            </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default GenreBadge;
