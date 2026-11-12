import './App.css'
import Header from "./components/Header.tsx";
import {Outlet,} from "react-router-dom";




function App() {

  return (
   <>
       <Header/>
       <Outlet/>
   </>
  )
};

export default App
//Тут:
// - Header буде показуватися на обох сторінках.
// - Outlet показуватиме або MoviesPage, або MovieDetailsPage.
