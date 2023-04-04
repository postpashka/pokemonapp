import React, {useEffect}    from 'react';

import Container from '@material-ui/core/Container';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from "../hooks/useActions";
import PokemonList from "../components/PokemonList";
import PokemonListSearch from "../components/PokemonListSearch"

const PokemonListPage: React.FC = () => {

    const {pokemonList, error, loading} = useTypedSelector(state => state.pokemonList )
    const {fetchPokemonList} = useActions()

    useEffect(() => {
      !pokemonList.length && fetchPokemonList()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Container maxWidth="lg" >
            <PokemonListSearch/>
            <PokemonList pokemonList={pokemonList} />
        </Container>
    );
};

export default PokemonListPage;