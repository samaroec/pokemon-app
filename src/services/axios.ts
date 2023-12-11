import axios from "axios";
import { POKEMONS_API_BASE_URL } from "../config";

export const axiosInstance = axios.create({
  baseURL: POKEMONS_API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
