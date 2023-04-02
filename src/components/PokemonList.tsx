import React, {useEffect}    from 'react';
import { Link } from "react-router-dom";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import { useTypedSelector } from '../hooks/useTypedSelector';
import {fetchPokemonList} from "../store/action-creators/pokemonList";
import { useActions } from "../hooks/useActions";

import { IMG_BASE_URL } from "../consts"

interface IPokemonList {
    pokemonList: any,
  }

const PokemonList = ({pokemonList}:IPokemonList) => {

    return (
        <Grid container spacing={2}>
            { pokemonList && pokemonList.map( (pokemon:any) => 

                <Grid item key={pokemon.name} sm={6} md={4} lg={3}>

                    <Card >
                        <CardActionArea component={Link} to={'pokemon/'+pokemon.id}>
                            <CardMedia
                                //style={{objectFit: "contain"}}
                                component="img"
                                height="200"
                                image={`${IMG_BASE_URL}${pokemon.id}.png`} 
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pokemon.name}
                                </Typography>
                                <Typography variant="body2" >
                                    {pokemon.id}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>


            ) }
        </Grid>
    );
};

export default PokemonList;