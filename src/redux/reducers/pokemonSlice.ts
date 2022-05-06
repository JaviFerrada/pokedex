import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PokemonState = {
  showPokemon: string
}

const initialState: PokemonState = {
  showPokemon: 'normal',
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    shufflePokemon: state => {
      state.showPokemon = 'shuffle'
    },
    orderByInferiorNumber: state => {
      state.showPokemon = 'ascNumber'
    },
    orderBySuperiorNumber: state => {
      state.showPokemon = 'descNumber'
    },
    orderByAZ: state => {
      state.showPokemon = 'AZ'
    },
    orderByZA: state => {
      state.showPokemon = 'ZA'
    },
  },
})

export const {
  shufflePokemon,
  orderByInferiorNumber,
  orderBySuperiorNumber,
  orderByAZ,
  orderByZA,
} = pokemonSlice.actions

export default pokemonSlice.reducer
