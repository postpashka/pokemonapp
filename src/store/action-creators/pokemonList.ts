import { PokemonListAction, PokemonListActionTypes } from "../../types/pokemonList";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchPokemonList = () => {
    return async (dispatch: Dispatch<PokemonListAction>) => {
        try {
            dispatch({type: PokemonListActionTypes.FETCH_POKEMONLIST})
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
            setTimeout(() => {
                dispatch({type: PokemonListActionTypes.FETCH_POKEMONLIST_SUCCESS, payload: response.data.results})
            }, 500)
        } catch (e) {
            dispatch({
                type: PokemonListActionTypes.FETCH_POKEMONLIST_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
