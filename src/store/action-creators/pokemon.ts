import {PokemonAction, PokemonActionTypes} from "../../types/pokemon";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchPokemon = () => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            dispatch({type: PokemonActionTypes.FETCH_POKEMON})
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            setTimeout(() => {
                dispatch({type: PokemonActionTypes.FETCH_POKEMON_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMON_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
