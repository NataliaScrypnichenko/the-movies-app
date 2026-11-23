//Показує рейтинг фільму у вигляді зірок.
import type {FC} from "react";

type PropsTypeMovieRating = {
    vote_average: number | null;
};

const StarsRating: FC<PropsTypeMovieRating> = ({vote_average}) => {

//     // перетворюю рейтинг із 10 балів у 5 зірок
//     //ote_average === null — перевіряємо, чи рейтинг дорівнює null
//     const starsCount = vote_average === null
// //? 0 — якщо так, кількість зірок буде 0
//         ? 0
//         : Math.round(vote_average / 2);//якщо ні, ділимо рейтинг на 2 і округлюємо.
//     Тобто ? і : разом дозволяють скоротити запис умови.

    let starsCount;

    if (vote_average === null) {
        starsCount = 0;
    } else {
        starsCount = Math.round(vote_average / 2);
    }

    return (
        <div>
            {/*<h4>*/}
            {/*    Rating: {vote_average}*/}
            {/*</h4>*/}

            {
                //створюю масив зірок.перебираю масив з 5 чисел створюю 5 елементів
                [1, 2, 3, 4, 5].map((star, index) => (
                    <span key={star}>
                        {/*//якщо index менший за кількість зірок — показуємо заповнену ★
                        інакше — порожню ☆
                        */}
                        {index < starsCount ? "★" : "☆"}
                    </span>
                ))
            }
        </div>
    );
};

export default StarsRating;
