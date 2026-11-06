    import {createBrowserRouter} from "react-router-dom";
    import App from "../App.tsx";
    import MoviesPage from "../containers/MoviesPage.tsx";
    import MovieDetailsPage from "../containers/MovieDetailsPage.tsx";


    export const routes = createBrowserRouter([
         {path:'/',element:<App/>, children:[
                 { path: 'discover/movie', element: <MoviesPage/>},
                 {path: 'movie/details', element: <MovieDetailsPage/>}
            ]
         }
    ]);
    // Компонент	Для чого потрібен
    // Header	Верхня частина сайту. Логотип, меню, можливо, пошук.
    //     MoviesList	Отримує масив фільмів і передає їх для відображення.
    //     MoviesListCard	Окрема картка одного фільму.
    //     PosterPreview	Відображає постер фільму.= MoviesListCard
    //     StarsRating	Показує рейтинг фільму у вигляді зірок.= MoviesListCard
    //     MovieInfo	Назва, опис та інформація про фільм.= MoviesListCard
    //     GenreBadge	Показує жанр у вигляді невеликої позначки.=MoviesListCard
    //     UserInfo	Маленьке коло з іменем користувача.= Header
