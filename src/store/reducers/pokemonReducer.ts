import {PokemonAction, PokemonActionTypes, PokemonState} from "../../types/pokemon";

const initialState: PokemonState = {
    pokemon: {},
    loading: false,
    error: null
}

export const pokemonReducer = (state = initialState, action: PokemonAction): PokemonState => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_POKEMON:
            return {loading: true, error: null, pokemon: {}}
        case PokemonActionTypes.FETCH_POKEMON_SUCCESS:
            return {loading: false, error: null, pokemon: action.payload}
        case PokemonActionTypes.FETCH_POKEMON_ERROR:
            return {loading: false, error: action.payload, pokemon: {}}
        default:
            return state
    }
}