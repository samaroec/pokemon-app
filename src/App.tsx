import React from "react";

import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./layout/theme-layout";
import SearchBar from "./pages/searchbar";
import PokemonList from "./pages/pokemonlist";
import ProfilPokemon from "./pages/profilepokemon";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <SearchBar />
        <PokemonList />

        <Route path="/profilPokemon/:name" element={<ProfilPokemon />} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
