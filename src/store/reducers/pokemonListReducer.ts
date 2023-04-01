import {PokemonListAction, PokemonListActionTypes, PokemonListState} from "../../types/pokemonList";

const initialState: PokemonListState = {
    pokemonList: [],
    loading: false,
    error: null
}

export const pokemonListReducer = (state = initialState, action: PokemonListAction): PokemonListState => {
    switch (action.type) {
        case PokemonListActionTypes.FETCH_POKEMONLIST:
            return {loading: true, error: null, pokemonList: []}
        case PokemonListActionTypes.FETCH_POKEMONLIST_SUCCESS:
            return {loading: false, error: null, pokemonList: action.payload}
        case PokemonListActionTypes.FETCH_POKEMONLIST_ERROR:
            return {loading: false, error: action.payload, pokemonList: []}
        default:
            return state
    }
}