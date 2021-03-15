import * as React from 'react';
import { AppBar, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

function NavBar() {
  return <AppBar position="static">
    <Typography variant="h6" >
      Game-Board
    </Typography>
    <IconButton
      aria-label="github repository">
        <GitHubIcon />
    </IconButton>
  </AppBar>;
}

export default NavBar;