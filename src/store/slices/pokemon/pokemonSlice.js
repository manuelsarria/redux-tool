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
            state.isLoadig = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;``