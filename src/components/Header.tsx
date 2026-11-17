// Верхня частина сайту. Логотип, меню, можливо, пошук.

//- всі фільми (getMovies), окремий фільм, пошук, сортування
// ) пошук фільмів по назві, або частині назви. подивитись що саме дає зараз апі, бо вона змінюється




import {useForm} from "react-hook-form";



interface IFromMovie {
    query: string;
}


const Header= () => {

  const {register,handleSubmit,formState:{errors}}= useForm<IFromMovie>()

    const onSearchSubmit=(data:IFromMovie)=>{
      console.log(data);
    }

    return (
        <div>
            <h1>Discover Movies</h1>
            <div>
                <form onSubmit={handleSubmit(onSearchSubmit)} >
                <input type="text" placeholder="Search..." {...register(
                    "query",{
                        required:true,
                        // minLength:{value:/^[a-zA-Z0-9\s'-]$/, message:"Enter at least 2 characters"},
                        pattern:{
                            value:/^[a-zA-Z0-9\s'’-]{2,} +$/,
                            message:"Please enter a movie title using English letters",},
                    })}/>
                    {errors.query && <p>{errors.query.message}</p>}
                <button >spend</button>
                </form>
            </div>

        </div>
    );
};

export default Header;
// UserInfo	Маленьке коло з іменем користувача.
//disabled={!isValid}/isValid
