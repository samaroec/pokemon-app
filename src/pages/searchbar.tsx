/*import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { fetchOnePokemonRequest } from "../redux/slices/pokemonslice";
import { Box, CircularProgress, Grid } from "@mui/material";
import { RootState } from "../redux/store";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const pokemonData = useSelector((state: any) => state.pokemon.pokemon);
  const loading = useSelector((state: RootState) => state.pokemon.isFetching);
  const handleSearch = () => {
    dispatch(fetchOnePokemonRequest(searchTerm.toLowerCase()));
  };
  useEffect(() => {
    dispatch(fetchOnePokemonRequest(searchTerm.toLowerCase()));
  }, []);

  useEffect(() => {
    console.log("Poke:", pokemonData);
  }, [pokemonData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <TextField
        label="Enter Pokémon name"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "600px",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={handleSearch}
        style={{ marginLeft: "10px" }}
      >
        Search
      </Button>

      <Grid container spacing={2}>
        {(pokemonData || []).map((pokemonData: any, index: any) => (
          <Grid item key={pokemonData.name}>
            <div>{pokemonData.name}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchBar;*/

import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { fetchOnePokemonRequest } from "../redux/slices/pokemonslice";
import { RootState } from "../redux/store";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const searchPokemon = async () => {
    dispatch(
      fetchOnePokemonRequest({
        name: searchTerm.toLowerCase(),
        navigate: navigate,
      })
    );
  };

  const pokemon = useSelector((state: RootState) => state.pokemon.pokemon);
  useEffect(() => {
    console.log("Poke:", pokemon);
  }, [pokemon]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <TextField
        label="Enter Pokémon name"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "600px",
        }}
      />
      <Link to="/profilPokemon"> </Link>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={searchPokemon}
        style={{ marginLeft: "10px" }}
      >
        Search
      </Button>{" "}
    </div>
  );
};

export default SearchBar;
