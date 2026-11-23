//Маленьке коло з іменем користувача
//Але спочатку важливо зрозуміти: у твоєму проєкті TMDB API повертає інформацію про фільми,
// а не про користувача, який зараз переглядає сайт.
// Тому ім'я потрібно буде передати в компонент через props або поки що задати самостійно

import type {FC} from "react";
import "./UserInfo.css"


type PropsType = {
    username: string;
};

const UserInfo: FC<PropsType> = ({username}) => {
    return (
        <div className="user-info">
            {username.charAt(0).toUpperCase()}
        </div>
    );
};

export default UserInfo;
