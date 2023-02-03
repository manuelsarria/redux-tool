import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoadig: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoadig = true;
        },
        setPokemons: (state, action) => {
            console.log(action)
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;``