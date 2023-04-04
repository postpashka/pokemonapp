import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from '../hooks/useTypedSelector';

interface SearchState {
  name: string;
  type: string;
}

function PokemonListSearch() {

  const {fetchPokemonList} = useActions()
  const { searchName, searchType} = useTypedSelector(state => state.pokemonList )
  const [inputs, setInputs] = useState<SearchState>({name: searchName, type: searchType});

  const handleChange = (e:any) => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  const onSearchClick = () => fetchPokemonList(inputs.name, inputs.type)
  const handleKeyDown = (event:any) => (event.key === 'Enter') && onSearchClick();

  return (
    <Box sx={{ py: 2}}>
      <Paper elevation={3}>
        <Toolbar>
          <TextField
            name="name"
            label="Search by name"
            type="search"
            margin="normal"
            value={inputs.name || ''} 
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            fullWidth={true}
          />
          <TextField
            name="type"
            label="Search by type"
            type="search"
            margin="normal"
            value={inputs.type || ''} 
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            fullWidth={true}
          />
          <IconButton aria-label="Search" onClick={onSearchClick}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Paper>
    </Box>
  )
}

export default PokemonListSearch;