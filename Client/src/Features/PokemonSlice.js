import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: [],
    detail: {},
  },
  reducers: {
    setPokemon: (state, action) => {
      state.list = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setPokemon, setDetail } = pokemonSlice.actions;

export const dataPokemon = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10",
      });

      //   console.log(data.results, `Cekk data all pokemon`);
      dispatch(setPokemon(data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailPokemon = (id) => {
  return async (dispatch) => {
    try {
      //   console.log(id,`<<<<< ini id`);
      const { data } = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon/` + id,
      });

      console.log(data,`<<< per pokemon`);
      dispatch(setDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const pokemonServer = () => {
  return async( dispatch ) => {
    try {

      const response = await axios({
        method:"get",
        url:"http://localhost:3000/pokemon",
        headers:{
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      })
      console.log(response.data,`<< fetch ke server`);
      dispatch(setPokemon(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}

export const detailPokemonServer = (id) => {
  return async( dispatch ) => {
    try {

      const response = await axios({
        method:"get",
        url:"http://localhost:3000/pokemon/" + id,
        headers:{
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      })
      console.log(response.data,`<< fetch detail server`);
      dispatch(setDetail(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}

export default pokemonSlice.reducer;
