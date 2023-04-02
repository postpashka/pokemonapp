import React, {useEffect}    from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import {fetchPokemon} from "../store/action-creators/pokemon";
import { useActions } from "../hooks/useActions";
import { useParams } from 'react-router-dom';

const PokemonInfo: React.FC = () => {

    const { pokemon:pokemonId } = useParams();

    const {pokemon, error, loading} = useTypedSelector(state => state.pokemon )

    const {fetchPokemon} = useActions()

    useEffect(() => {
        fetchPokemon(pokemonId)
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>

            {JSON.stringify(pokemon)}

            {pokemon && pokemon.name}
            <ul>
            { pokemon.moves && pokemon.moves.map( (move:any) => 
                <li>{move.move.name}</li>
            ) }
            </ul>

            <ul>
            { pokemon.stats && pokemon.stats.map( (stat:any) => 
                <li>{stat.stat.name}</li>
            ) }
            </ul>

        </div>
    );
};

export default PokemonInfo;