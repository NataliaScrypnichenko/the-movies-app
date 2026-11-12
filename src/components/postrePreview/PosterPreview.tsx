// Відображає постер фільму.
import type {FC} from "react";
import {getPosterUrl} from "../../service/api.sevice.tsx";
import './PosterPreview.css';


type PropsTypeMovie={
    poster_path: string | null,
};


const PosterPreview:FC<PropsTypeMovie> = ({ poster_path}) => {

     const poster =poster_path ? getPosterUrl(poster_path): null

    return (
        <div className={"poster-card"}>
            {
                poster && <img src={poster}  alt="Movie poster"/>
            }
        </div>
    );
};

export default PosterPreview;
