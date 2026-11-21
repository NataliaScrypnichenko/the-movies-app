// Верхня частина сайту. Логотип, меню, можливо, пошук.

//- всі фільми (getMovies), окремий фільм, пошук, сортування
// ) пошук фільмів по назві, або частині назви. подивитись що саме дає зараз апі, бо вона змінюється

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import movieValidator from "../validators/movie.validator.ts";
import type {FC} from "react";

interface IFromMovie {
    query: string;
};

//
type PropsFormMovie = {
    onSearch: (query: string) => void;
};

const Header: FC<PropsFormMovie >= ({onSearch}) => {

    const {register,handleSubmit,formState:{errors, isValid}}=
        useForm<IFromMovie>({mode: 'all', resolver: joiResolver(movieValidator)});

    const onSearchSubmit=(data:IFromMovie)=>{
        //передає саме рядок,
       onSearch(data.query);
    };


    return (
        <div>
            <h1>Discover Movies</h1>
            <div>
                <form onSubmit={handleSubmit(onSearchSubmit)}>

                    <input type="text" placeholder="Search..." {...register("query")}/>

                    {errors.query && <p>{errors.query.message}</p>}

                    <button type="submit" disabled={!isValid}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
// UserInfo	Маленьке коло з іменем користувача.
//disabled={!isValid}/isValid
