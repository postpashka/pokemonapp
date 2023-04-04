import axios from 'axios';


const defaultOptions = {
    method: 'POST',
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    headers: {
        'content-type': 'application/json',
        'x-methed-used': 'graphiql'
    },
}

export const getPokemons = async (name:string, type:string) => {

    const options = {
        ...defaultOptions,
		data: {
			query: `{
                pokemon_v2_pokemon(where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_ilike: "%${type}%"}}}, name: {_ilike: "%${name}%"}}) {
                    name
                    id
                    pokemon_v2_pokemontypes_aggregate {
                        nodes {
                            pokemon_v2_type {
                                name
                            }
                        }
                    }
                }
            }`
		}
	};

    return axios.request(options)

};

export const getPokemon = async (id:number) => {   

    const options = {
        ...defaultOptions,
		data: {
			query: `{
                pokemon_v2_pokemon(where: {id: {_eq: "${id}"}}) {
                    name
                    pokemon_v2_pokemonmoves {
                      pokemon_v2_move {
                        name
                      }
                    }
                    pokemon_v2_pokemonsprites {
                      sprites
                    }
                    pokemon_v2_pokemonstats {
                      pokemon_v2_stat {
                        name
                      }
                      base_stat
                    }
                    pokemon_v2_pokemontypes {
                      pokemon_v2_type {
                        name
                      }
                    }
                  }
            }`
		}
	};

    return axios.request(options)

};