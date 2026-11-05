import MoviesList from "../components/moviesList/MoviesList.tsx";



const MoviesPage = () => {

    return (
        <div>

              <MoviesList/>

        </div>
    );
};

export default MoviesPage;
//Пізніше сюди додамо пошук, жанри, сортування та пагінацію.

// додаю сюди сомпоненти
//     MoviesList	Отримує масив фільмів і передає їх для відображення
// Згідно із завданням, MoviesList:
// - отримує масив фільмів;
// - перебирає масив;
// - передає кожен фільм у MoviesListCard;
// - відображає список карток.

