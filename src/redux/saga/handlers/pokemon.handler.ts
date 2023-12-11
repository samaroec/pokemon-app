import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  fetchOnePokemonFailure,
  fetchOnePokemonSuccess,
  fetchListPokemonFailure,
  fetchListPokemonSuccess,
} from "../../slices/pokemonslice";

import { getPokemon, getPokemonsList } from "../requests/pokemon.request";

export function* handleFetchlistPokemon(action: any): Generator<any, any, any> {
  try {
    const responseAll = yield call(getPokemonsList);
    const { status, data } = responseAll;
    console.log("Status:", status);
    if (status === 200) {
      const table = yield all(
        data.results.map(async (pokemon: any) => {
          const dataPokemon = await axios.get(pokemon.url);

          const finalPokemon = { ...pokemon, ...dataPokemon.data };

          return finalPokemon;
        })
      );
      yield put(fetchListPokemonSuccess(table));
    }
  } catch (error: any) {
    console.log("Error While Fetching Pokemons List:", error);
    yield put(fetchListPokemonFailure("Error fetching pokemons"));
  }
}
////////// Find  by name ////////
export function* handleFetchPokemon(action: any): Generator<any, any, any> {
  try {
    const { name, navigate } = action.payload;

    const { status, data } = yield call(getPokemon, name);
    if (status === 200) {
      yield put(fetchOnePokemonSuccess({ pokemon: data }));
      navigate("");
    }
  } catch (e) {
    console.log("error while fetching pokemon by name", e);
    yield put(fetchOnePokemonFailure("Pokemon not found:"));
  }
}
