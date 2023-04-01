import * as PokemonActionCreators from './pokemon'
import * as PokemonListActionCreators from './pokemonList'

export default {
    ...PokemonActionCreators,
    ...PokemonListActionCreators
}
