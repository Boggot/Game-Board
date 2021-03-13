import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';

function NavBar() {
    return <AppBar position="static">
            <Typography variant="h6" className={classes.title}>
      Game-Board
    </Typography>
    </AppBar>;
}

export default NavBar;