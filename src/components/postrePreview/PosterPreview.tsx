// Відображає постер фільму.
import type {FC} from "react";
import {getPosterUrl} from "../../service/api.sevice.tsx";
import './PosterPreview.css';
import {Link} from "react-router-dom";


type PropsTypeMovie={
    poster_path: string | null,
    id: number,
};


const PosterPreview:FC<PropsTypeMovie> = ({ poster_path,id}) => {

     const poster =poster_path ? getPosterUrl(poster_path): null

    return (
        <div className={"poster-card"}>
            {
                poster &&
                <Link to={`/movie/${id}`}>
                     <img src={poster}  alt="Movie poster"/>
                </Link>
            }
        </div>
    );
};

export default PosterPreview;
