// Верхня частина сайту. Логотип, меню, можливо, пошук.

//- всі фільми (getMovies), окремий фільм, пошук, сортування
// ) пошук фільмів по назві, або частині назви. подивитись що саме дає зараз апі, бо вона змінюється

import GenreBadge from "./GenreBadge.tsx";

const Header = () => {
    return (
        <div>
            <h1>Discover Movies</h1>
            <div>
                <input/>
                <button onClick={() => {
                }}>пошук
                </button>
            </div>
            <GenreBadge/>
        </div>
    );
};

export default Header;
// UserInfo	Маленьке коло з іменем користувача.
