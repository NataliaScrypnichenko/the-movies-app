    import {createBrowserRouter} from "react-router-dom";
    import App from "../App.tsx";
    import MoviesPage from "../containers/MoviesPage.tsx";
    import MovieDetailsPage from "../containers/MovieDetailsPage.tsx";


    export const routes = createBrowserRouter([
         {path:'/',element:<App/>, children:[
                 { path: 'discover', element: <MoviesPage/>},
                 {path: 'movie/:id', element: <MovieDetailsPage/>}
            ]
         }
    ]);
    // Компонент	Для чого потрібен
    // Header	Верхня частина сайту. Логотип, меню, можливо, пошук.
    //     MoviesList	Отримує масив фільмів і передає їх для відображення.
    //     MoviesListCard	Окрема картка одного фільму.
    //     PosterPreview	Відображає постер фільму.
    //     StarsRating	Показує рейтинг фільму у вигляді зірок.
    //     MovieInfo	Назва, опис та інформація про фільм.
    //     GenreBadge	Показує жанр у вигляді невеликої позначки.
    //     UserInfo	Маленьке коло з іменем користувача.
