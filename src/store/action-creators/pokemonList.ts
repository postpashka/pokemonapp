import { Dispatch } from "redux";
import { PokemonListAction, PokemonListActionTypes } from "../../types/pokemonList";

import { getPokemons } from "../../api/pokemonAPI"

export const fetchPokemonList = (name:string = '', type:string = '') => {
    return async (dispatch: Dispatch<PokemonListAction>) => {
        
        try {
            dispatch({type: PokemonListActionTypes.FETCH_POKEMONLIST})

            const response = await getPokemons(name, type);
            
            dispatch({
                type: PokemonListActionTypes.FETCH_POKEMONLIST_SUCCESS, 
                payload: {
                    pokemonList: response?.data.data.pokemon_v2_pokemon,
                    searchName: name,
                    searchType: type
                }
            })

        } catch (e) {
            
            dispatch({
                type: PokemonListActionTypes.FETCH_POKEMONLIST_ERROR,
                payload: 'Loading error'
            })
        }
    }
}
