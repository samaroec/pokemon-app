import { all, takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchOnePokemonRequest,
  fetchListPokemonRequest,
  fetchOnePokemonIdRequest,
} from "../slices/pokemonslice";
import {
  handleFetchlistPokemon,
  handleFetchPokemon,
  handleFetchPokemonById,
} from "./handlers/pokemon.handler";

export default function* watcherSaga(): any {
  yield all([
    yield takeEvery(fetchListPokemonRequest.type, handleFetchlistPokemon),

    yield takeLatest(fetchOnePokemonRequest.type, handleFetchPokemon),

    yield takeLatest(fetchOnePokemonIdRequest.type, handleFetchPokemonById),
  ]);
}
