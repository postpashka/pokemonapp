import React from 'react';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';

import PokemonListPage from './pages/PokemonListPage'
import PokemonPage from './pages/PokemonPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokemon/:pokemon" element={<PokemonPage />} />
          <Route path="*" element={<div><h2>404 Page not found</h2></div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;