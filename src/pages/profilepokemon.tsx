import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { RootState } from "../redux/store";
import { baseImageUrl } from "../config";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOnePokemonRequest } from "../redux/slices/pokemonslice";

const ProfilPokemon: FC = (props) => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state: any) => state.pokemon);
  const { name } = useParams();

  useEffect(() => {
    console.log("Pokemon found:", pokemon);
  }, [pokemon]);

  return (
    <div style={{ padding: "25px" }}>
      <div>
        <Grid container={true} spacing={4}>
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
        </Grid>
      </div>
    </div>
  );
};

export default ProfilPokemon;
