import React from 'react';

import Typography from '@material-ui/core/Typography';

interface IPokemonInfo {
  headerInfo: string,
  contentInfo: string
}

const PokemonPageInfo = ({headerInfo, contentInfo}:IPokemonInfo) => {
  return (
    <>
      <Typography component="h2" variant="h5" color="textPrimary">
          { headerInfo }
      </Typography>
      <Typography paragraph>
          { contentInfo }
      </Typography>
    </>
  )
}

export default PokemonPageInfo;