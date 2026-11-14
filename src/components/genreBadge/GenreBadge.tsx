// Показує жанр у вигляді невеликої позначки.

import {Link} from "react-router-dom";
import './GenreBadge.css'
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


                {/*<Link to={'/genre/genre_ids/list'}>Action</Link>*/}
                {/*<Link to={'/genre/genre_ids/list'}>Adventure</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Animation</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Comedy</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Crime</Link>*/}
                {/*<Link to={'/genre/movie/list'}>DDocumentary</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Drama</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Family</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Fantasy</Link>*/}
                {/*<Link to={'/genre/movie/list'}>History</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Music</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Romance</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Science Fiction</Link>*/}
                {/*<Link to={'/genre/movie/list'}>TV Movie</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Thriller</Link>*/}
                {/*<Link to={'/genre/movie/list'}>War</Link>*/}
                {/*<Link to={'/genre/movie/list'}>Western</Link>*/}

            </div>
        </div>
    );
};

export default GenreBadge;
