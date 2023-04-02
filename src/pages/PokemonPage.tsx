import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

import { useTypedSelector } from '../hooks/useTypedSelector';
import {fetchPokemon} from "../store/action-creators/pokemon";
import { useActions } from "../hooks/useActions";
import PokemonPageInfo from "../components/PokemonPageInfo";
import { IMG_BASE_URL } from "../consts"

const PokemonPage: React.FC = () => {

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

    const types = pokemon.pokemon_v2_pokemontypes?.map((type:any)=>{return type.pokemon_v2_type?.name}).join(', ');
    const stats = pokemon.pokemon_v2_pokemonstats?.map((stat:any)=>{return stat.pokemon_v2_stat?.name + ":" + stat.base_stat}).join(', ');
    const moves = pokemon.pokemon_v2_pokemonmoves?.map((move:any)=>{return move.pokemon_v2_move?.name}).join(', ');
    
    return (
        <Container maxWidth="lg">
            
            <Card>
                <CardContent>
                    <CardMedia
                        style={{objectFit: "contain"}}
                        component="img"
                        height="300"
                        image={`${IMG_BASE_URL}${pokemonId}.png`} 
                    />
                    
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {pokemon.name}
                    </Typography>
                    
                    <PokemonPageInfo
                      headerInfo="Types"
                      contentInfo={types}
                    />

                    <PokemonPageInfo
                      headerInfo="Stats"
                      contentInfo={stats}
                    />

                    <PokemonPageInfo
                      headerInfo="Moves"
                      contentInfo={moves}
                    />

                </CardContent>
            </Card>
        </Container>

    );
};

export default PokemonPage;