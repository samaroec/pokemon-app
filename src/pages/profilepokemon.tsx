import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { RootState } from "../redux/store";
import { baseImageUrl } from "../config";
import { FC } from "react";
import { useSelector } from "react-redux";

const ProfilPokemon: FC = () => {
  const { pokemon } = useSelector((state: any) => state.pokemon);
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
