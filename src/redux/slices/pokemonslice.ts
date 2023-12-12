import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pokemon: null,
  isFetching: false,
  error: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialState,
  reducers: {
    fetchListPokemonRequest(state) {
      state.isFetching = true;
    },
    fetchListPokemonSuccess(state, action) {
      state.isFetching = false;
      state.pokemons = action.payload;
      state.error = null;
    },
    fetchListPokemonFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },

    fetchOnePokemonRequest(state, action) {
      state.isFetching = true;
    },
    fetchOnePokemonSuccess(state, action) {
      state.isFetching = false;
      state.error = null;
      state.pokemon = action.payload.pokemon;
    },
    fetchOnePokemonFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
      state.pokemon = null;
    },

    fetchOnePokemonIdRequest(state, action) {
      state.isFetching = true;
    },
    fetchOnePokemonIdSuccess(state, action) {
      state.isFetching = false;
      state.error = null;
      state.pokemon = action.payload.pokemon;
    },
    fetchOnePokemonIdFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
      state.pokemon = null;
    },
  },
});

export const {
  fetchListPokemonFailure,
  fetchListPokemonRequest,
  fetchListPokemonSuccess,
  fetchOnePokemonSuccess,
  fetchOnePokemonRequest,
  fetchOnePokemonFailure,
  fetchOnePokemonIdSuccess,
  fetchOnePokemonIdRequest,
  fetchOnePokemonIdFailure,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
