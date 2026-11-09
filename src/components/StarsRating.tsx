//Показує рейтинг фільму у вигляді зірок.

import type {FC} from "react";

type PropsTypeMovieRating={
    vote_average: number | null,
};


const StarsRating:FC<PropsTypeMovieRating>= ({vote_average}) => {


    return (
        <div>
            {
                vote_average && <h4> rating: {vote_average}</h4>
            }

        </div>
    );
};

export default StarsRating;


