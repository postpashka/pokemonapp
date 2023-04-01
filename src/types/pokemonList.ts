export interface PokemonListState {
    pokemonList: any[];
    loading: boolean;
    error: null | string;
}
export enum PokemonListActionTypes {
    FETCH_POKEMONLIST = 'FETCH_POKEMONLIST',
    FETCH_POKEMONLIST_SUCCESS = 'FETCH_POKEMONLIST_SUCCESS',
    FETCH_POKEMONLIST_ERROR = 'FETCH_POKEMONLIST_ERROR',
}
interface FetchPokemonListAction {
    type: PokemonListActionTypes.FETCH_POKEMONLIST;
}
interface FetchPokemonListSuccessAction {
    type: PokemonListActionTypes.FETCH_POKEMONLIST_SUCCESS;
    payload: any[]
}
interface FetchPokemonListErrorAction {
    type: PokemonListActionTypes.FETCH_POKEMONLIST_ERROR;
    payload: string;
}
export type PokemonListAction = FetchPokemonListAction | FetchPokemonListErrorAction | FetchPokemonListSuccessAction