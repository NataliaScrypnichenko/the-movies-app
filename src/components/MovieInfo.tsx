// Назва, опис та інформація про фільм.
import type {FC} from "react"

type PropsTypeMovieOverview = {
    overview: string | null;
};

const MovieInfo:FC< PropsTypeMovieOverview> = ({overview}) => {

    return (
        <div>
            {
               overview &&  <p>{overview}</p>
            }
        </div>
    );
};

export default MovieInfo;
