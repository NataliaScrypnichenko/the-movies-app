import './App.css'
import Header from "./components/Header.tsx";
import {Outlet,} from "react-router-dom";
import MoviesPage from "./containers/MoviesPage.tsx";



function App() {

  return (
   <>
       <Outlet/>
       <Header/>
       <MoviesPage/>
       {/*<UserInfo/>*/}
   </>
  )
};

export default App
//Тут:
// - Header буде показуватися на обох сторінках.
// - Outlet показуватиме або MoviesPage, або MovieDetailsPage.
