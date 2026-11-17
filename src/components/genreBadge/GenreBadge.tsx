// Показує жанр у вигляді невеликої позначки.

import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IGenre} from "../../models/IGenre.ts";
import {getGenresMovie} from "../../service/api.sevice.tsx";


const GenreBadge = () => {

    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        getGenresMovie()
            .then(value => {
                setGenres(value.genres)
            })
    })

    return (
        <div>
            <div className="genreBadge">

                {
                    genres.map(genre => (
                        <Link key={genre.id} to={`/genre/${genre.id}`}>
                            {genre.name}
                        </Link>
                    ))
                }

            </div>
        </div>
    );
};

export default GenreBadge;
