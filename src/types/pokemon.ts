export interface PokemonState {
    pokemon: any;
    loading: boolean;
    error: null | string;
}
export enum PokemonActionTypes {
    FETCH_POKEMON = 'FETCH_POKEMON',
    FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS',
    FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR',
}
interface FetchPokemonAction {
    type: PokemonActionTypes.FETCH_POKEMON;
}
interface FetchPokemonSuccessAction {
    type: PokemonActionTypes.FETCH_POKEMON_SUCCESS;
    payload: any[]
}
interface FetchPokemonErrorAction {
    type: PokemonActionTypes.FETCH_POKEMON_ERROR;
    payload: string;
}
export type PokemonAction = FetchPokemonAction | FetchPokemonErrorAction | FetchPokemonSuccessAction