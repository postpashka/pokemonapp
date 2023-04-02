import React, {useEffect}    from 'react';
import { Link } from "react-router-dom";

import Container from '@material-ui/core/Container';

import { useTypedSelector } from '../hooks/useTypedSelector';
import {fetchPokemonList} from "../store/action-creators/pokemonList";
import { useActions } from "../hooks/useActions";

import PokemonList from "../components/PokemonList";

const PokemonListPage: React.FC = () => {

    const {pokemonList, error, loading} = useTypedSelector(state => state.pokemonList )

    const {fetchPokemonList} = useActions()

    useEffect(() => {
      !pokemonList.length && fetchPokemonList()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Container maxWidth="lg" >
            <PokemonList
              pokemonList={pokemonList}
            />
        </Container>
    );
};

export default PokemonListPage;