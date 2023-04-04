import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

function NavBar() {
  return (
    <AppBar position="static">
    <Toolbar>
        <Typography variant="h4">
            <Link to="/">Pokedox</Link>
        </Typography>
    </Toolbar>
    </AppBar>
  )
}

export default NavBar;