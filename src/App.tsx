import React from 'react';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import PokemonListPage from './pages/PokemonListPage'
import PokemonPage from './pages/PokemonPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PokemonListPage/>} />
        <Route path="/pokemon/:pokemon" element={ <PokemonPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;