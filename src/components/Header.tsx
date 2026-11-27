// Верхня частина сайту. Логотип, меню, можливо, пошук.
//- всі фільми (getMovies), окремий фільм, пошук, сортування
// ) пошук фільмів по назві, або частині назви. подивитись що саме дає зараз апі, бо вона змінюється
// UserInfo	Маленьке коло з іменем користувача.


import {useForm} from "react-hook-form";
// joiResolver — це спеціальний посередник між двома бібліотеками:
//     - react-hook-form — керує формою;
// - Joi — перевіряє введені дані за правилами.
//     Тобто joiResolver передає введене користувачем значення на перевірку до нашого Joi-валідатора.
import {joiResolver} from "@hookform/resolvers/joi";
// Тут я імпортую власний валідатор де описала правила для поля пошуку:
import movieValidator from "../validators/movie.validator.ts";
//Він дозволяє програмно переходити з однієї сторінки на іншу.
import {useNavigate} from "react-router-dom";
import UserInfo from "./userInfo/UserInfo.tsx";
import GenreBadge from "./genreBadge/GenreBadge.tsx";

//Головне завдання цього компонента: отримати назву фільму з поля пошуку, перевірити її
// за допомогою Joi та перейти на сторінку пошуку.

//описую, які дані будуть у формі.
interface IFromMovie {
    query: string;
};

const Header = () => {
//за допомоги хука буду переходити на іншу сторінку
    const navigate = useNavigate();
    //register-Реєструє поле форми та зв'язує його з react-hook-form
    //handleSubmit-Обробляє відправлення форму та запускає перевірку
    //errors-Містить помилки валідації..isValid-Показує, чи пройшла форма перевірку
    const {register, handleSubmit, formState: {errors, isValid}} =
        //викликаю хук і передаю йому тип даних які буде приймати
        useForm<IFromMovie>({
            // вібувається перевірка і приводі даних можна побачити помилку
            mode: 'all',
            // передаю валідатор де прописані правила воду даних
            resolver: joiResolver(movieValidator)
        });


    //Створюю функцію обробки пошукую
    // Ця функція виконається після успішної перевірки форми та її відправлення.
//data — це об'єкт із введеними користувачем даними.
    const onSearchSubmit = (data: IFromMovie) => {
        //переход на сторінку пошуку data.query — текст, який ввів користувач.
        //encodeURIComponent-перетворює спеціальні символи та пробіли у формат,
        // який можна безпечно передавати через URL
        navigate(`/search?query=${encodeURIComponent(data.query)}`);
    };


    return (
        <div>
            <UserInfo username="Natalia"/>
            <h1>Discover Movies</h1>
            <div>
                {/*Форма запускає handleSubmit.handleSubmit перевіряє введені дані через Joi.
                 Якщо дані правильні — викликається onSearchSubmit.
                 Якщо є помилки — вони записуються в errors, а перехід на сторінку пошуку не відбувається.
                 handleSubmit — це посередник між формою та функцією onSearchSubmit.*/}
                <form onSubmit={handleSubmit(onSearchSubmit)}>
                    {/*register("query")-реєструє поле введення у react-hook-form.
                    Він повертає необхідні властивості та обробники, які потрібні для роботи з полем.
                    ...= Він розгортає ці властивості безпосередньо в компоненті input
                    Завдяки цьому react-hook-form знає:яке поле заповнює користувач i що водить,
                    що змінює і коли поле втрачає фокус*/}
                    <input
                        type="text"
                        placeholder="Search..."
                        {...register("query")}
                    />
                    {/*виводиться поле про помилку*/}
                    {errors.query && <p>{errors.query.message}</p>}
                    {/* type="submit"= кнопка відправляє форму.
                    disabled={!isValid}-кнопка не дозволить відправити форму,
                    поки введені дані не відповідають правилам валідатора*/}
                    <button type="submit" disabled={!isValid}>
                        Search
                    </button>
                </form>
                <GenreBadge/>
            </div>
        </div>
    );
};

export default Header;
