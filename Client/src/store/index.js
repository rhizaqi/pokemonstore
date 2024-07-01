import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../Features/PokemonSlice";

export default configureStore({
    reducer: {
        pokemon: pokemonSlice,
    }
})

