import { PokemonListAction, PokemonListActionTypes } from "../../types/pokemonList";
import { Dispatch } from "redux";


import { getPokemons } from "../../api/pokemonAPI"

export const fetchPokemonList = () => {
    return async (dispatch: Dispatch<PokemonListAction>) => {
        try {
            dispatch({type: PokemonListActionTypes.FETCH_POKEMONLIST})

            const response = await getPokemons()

            dispatch({type: PokemonListActionTypes.FETCH_POKEMONLIST_SUCCESS, payload: response.data.data.pokemon_v2_pokemon})

        } catch (e) {
            
            dispatch({
                type: PokemonListActionTypes.FETCH_POKEMONLIST_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
