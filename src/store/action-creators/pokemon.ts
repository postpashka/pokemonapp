import {PokemonAction, PokemonActionTypes} from "../../types/pokemon";
import {Dispatch} from "redux";
import axios from "axios";

import { getPokemon } from "../../api/pokemonAPI"

export const fetchPokemon = (id:any) => {
    return async (dispatch: Dispatch<PokemonAction>) => {
        try {
            dispatch({type: PokemonActionTypes.FETCH_POKEMON})

            const response = await getPokemon(id)

            dispatch({type: PokemonActionTypes.FETCH_POKEMON_SUCCESS, payload: response.data.data.pokemon_v2_pokemon[0]})

        } catch (e) {
            dispatch({
                type: PokemonActionTypes.FETCH_POKEMON_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}
