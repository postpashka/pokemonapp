import React, {useEffect}    from 'react';
import { Link } from "react-router-dom";

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
                <li key={pokemon.id}>
                    <Link to={'pokemon/'+pokemon.id}>{pokemon.name}</Link>
                </li>
            ) }
            </ul>

        </div>
    );
};

export default PokemonList;