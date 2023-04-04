import {PokemonListAction, PokemonListActionTypes, PokemonListState} from "../../types/pokemonList";

const initialState: PokemonListState = {
    pokemonList: [],
    searchName: '',
    searchType: '',
    loading: false,
    error: null
}

export const pokemonListReducer = (state = initialState, action: PokemonListAction): PokemonListState => {
    switch (action.type) {
        case PokemonListActionTypes.FETCH_POKEMONLIST:
            return {...state, loading: true, error: null, pokemonList: []}
        case PokemonListActionTypes.FETCH_POKEMONLIST_SUCCESS:
            return {
                loading: false, 
                error: null, 
                pokemonList: action.payload.pokemonList,
                searchName: action.payload.searchName,
                searchType: action.payload.searchType
            }
        case PokemonListActionTypes.FETCH_POKEMONLIST_ERROR:
            return {...state, loading: false, error: action.payload, pokemonList: []}
        default:
            return state
    }
}