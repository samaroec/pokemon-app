import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { RootState } from "../redux/store";
import { baseImageUrl } from "../config";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOnePokemonIdRequest } from "../redux/slices/pokemonslice";

const InfoDialog: FC = (props) => {
  const dispatch = useDispatch();
  const { pokemon, isLoading } = useSelector((state: any) => state.pokemon);
  const { id } = useParams();

  //   useEffect(() => {
  //     console.log("Pokemon with id found:", pokemon);
  //   }, [pokemon]);

  useEffect(() => {
    if (id !== null && id !== undefined) {
      dispatch(
        fetchOnePokemonIdRequest({
          id: id,
        })
      );
    }
  }, [id]);

  return (
    <Card sx={{ maxWidth: 400 }}>
      {isLoading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : pokemon !== null ? (
        <Grid container>
          <Grid
            item
            xs={4}
            sx={{ padding: 2, display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h6">{pokemon.name}</Typography>
            <CardMedia
              component="img"
              height="140"
              image={`${baseImageUrl}${pokemon.id}.png`}
              alt={pokemon.name}
              sx={{ objectFit: "contain", flexGrow: 1 }}
            />
          </Grid>

          <Grid item xs={8}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {pokemon.description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Typography>Pokemon not found</Typography>
        </Box>
      )}
    </Card>
  );
};
export default InfoDialog;
