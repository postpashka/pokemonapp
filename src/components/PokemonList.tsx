import React from 'react';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { IMG_BASE_URL } from "../consts"
import PaginationControlled from "../components/PaginationControlled"

interface IPokemonList {
    pokemonList: any,
  }

function PokemonListItems({ currentItems }:any) {
    return (
        <Grid 
            container 
            spacing={2}
            alignItems="center"
            justifyContent="center"
        >
            { currentItems && currentItems.map( (pokemon:any) => 
                <Grid item key={pokemon?.name} sm={6} md={4} lg={3}>
                    <Card >
                        <CardActionArea component={Link} to={'pokemon/'+pokemon?.id}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={`${IMG_BASE_URL}${pokemon?.id}.png`} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pokemon?.name}
                                </Typography>
                                <Typography variant="body2" >
                                    { pokemon.pokemon_v2_pokemontypes_aggregate.nodes.map( (node:any) => 
                                        <Chip label={node.pokemon_v2_type.name} variant="outlined" />
                                    )}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                ) }
        </Grid>
    );
}

const PokemonList = ({pokemonList}:IPokemonList) => {
    return (
        <PaginationControlled
            itemsData={pokemonList}
            ItemsComponent={PokemonListItems}
        />
    );
};

export default PokemonList;