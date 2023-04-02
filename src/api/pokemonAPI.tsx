import axios from 'axios';


const defaultOptions = {
    method: 'POST',
    url: 'https://beta.pokeapi.co/graphql/v1beta',
    headers: {
        'content-type': 'application/json',
        'x-methed-used': 'graphiql'
    },
}

export const getPokemons = async () => {

    const options = {
        ...defaultOptions,
		data: {
			query: `{
                pokemon_v2_pokemon {
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


export const getPokemon = async (id:any) => {

    const options = {
        ...defaultOptions,
		data: {
			query: `{
                pokemon_v2_pokemon(where: {id: {_eq: "1"}}) {
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


