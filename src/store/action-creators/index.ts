import * as PokemonActionCreators from './pokemon'
import * as PokemonListActionCreators from './pokemonList'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...PokemonActionCreators,
    ...PokemonListActionCreators
}
