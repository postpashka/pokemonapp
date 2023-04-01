import React, {useEffect}    from 'react';

import { useTypedSelector } from '../hooks/useTypedSelector';
import {fetchPokemonList} from "../store/action-creators/pokemonList";
import { useActions } from "../hooks/useActions";

const PokemonList: React.FC = () => {

    const {pokemonList, error, loading} = useTypedSelector(state => state.pokemonList )

    const {fetchPokemonList} = useActions()

    useEffect(() => {
        fetchPokemonList()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <ul>
            { pokemonList && pokemonList.map( (pokemon:any) => 
                <li>{pokemon.name} {pokemon.url}</li>
            ) }
            </ul>

        </div>
    );
};

export default PokemonList;