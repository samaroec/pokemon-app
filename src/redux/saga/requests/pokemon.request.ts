import { axiosInstance } from "../../../services/axios";

export const getPokemonsList = async () => {
  return await axiosInstance.get(`pokemon`);
};

export const getPokemon = async (query: string) => {
  return await axiosInstance.get(`pokemon/${query}`);
};
