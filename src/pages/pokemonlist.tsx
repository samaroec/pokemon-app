import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Theme,
  IconButton,
  CardHeader,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseImageUrl } from "../config";

import {
  fetchListPokemonRequest,
  fetchListPokemonSuccess,
  fetchOnePokemonIdRequest,
  fetchOnePokemonRequest,
} from "../redux/slices/pokemonslice";
import { RootState } from "../redux/store";
import SearchBar from "./searchbar";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons: any[] = useSelector(
    (state: RootState) => state.pokemon.pokemons
  );
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.pokemon.isFetching);
  const error = useSelector((state: RootState) => state.pokemon.error);
  //const [id, setId] = useState("");
  useEffect(() => {
    dispatch(fetchListPokemonRequest());
  }, []);

  useEffect(() => {
    console.log("Poke:", pokemons);
  }, [pokemons]);

  const detailsPokemon = async (id: any) => {
    navigate(`/detailsPokemon/${id}`);
  };
  return (
    <Box>
      <SearchBar />
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="60vh"
        >
          <CircularProgress disableShrink />
        </Box>
      ) : (
        <div style={{ padding: "25px" }}>
          {pokemons.length !== 0 ? (
            <div>
              <Grid container={true} spacing={4}>
                {pokemons.map((pokemon: any, index: any) => (
                  <Grid item key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
                    <div>
                      {" "}
                      <Card
                        style={{
                          background:
                            "linear-gradient(to right,#bbe4e9,#407088)",
                          minHeight: 0,
                        }}
                      >
                        <div
                          className="info__icon"
                          onClick={() => detailsPokemon(pokemon.id)}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                          </svg>
                        </div>
                        <CardMedia
                          component="img"
                          image={`${baseImageUrl}${pokemon.id}.png`}
                          alt={pokemon.name}
                          style={{ maxWidth: "100%", maxHeight: "80%" }}
                        />
                        <CardContent
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="h6" component="div">
                            {pokemon.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          ) : null}
        </div>
      )}
    </Box>
  );
};

export default PokemonList;
