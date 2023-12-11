import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Theme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { baseImageUrl } from "../config";

import {
  fetchListPokemonRequest,
  fetchListPokemonSuccess,
} from "../redux/slices/pokemonslice";
import { RootState } from "../redux/store";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemons: any[] = useSelector(
    (state: RootState) => state.pokemon.pokemons
  );

  const loading = useSelector((state: RootState) => state.pokemon.isFetching);
  const error = useSelector((state: RootState) => state.pokemon.error);
  useEffect(() => {
    dispatch(fetchListPokemonRequest());
  }, []);

  useEffect(() => {
    console.log("Poke:", pokemons);
  }, [pokemons]);

  return loading ? (
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
                      background: "linear-gradient(to right,#bbe4e9,#407088)",
                      minHeight: 0,
                    }}
                  >
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
  );
};

export default PokemonList;
