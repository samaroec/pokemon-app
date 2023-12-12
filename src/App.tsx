import React from "react";

import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./layout/theme-layout";
import SearchBar from "./pages/searchbar";
import PokemonList from "./pages/pokemonlist";
import ProfilPokemon from "./pages/profilepokemon";
import InfoDialog from "./pages/infodialgo";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/profilPokemon/:name" element={<ProfilPokemon />} />
          <Route path="/detailsPokemon/:id" element={<InfoDialog />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
