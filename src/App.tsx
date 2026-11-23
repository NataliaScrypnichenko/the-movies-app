import './App.css'

import {Outlet,} from "react-router-dom";

import Header from "./components/Header.tsx";




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
