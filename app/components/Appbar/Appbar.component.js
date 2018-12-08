import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

function SimpleAppBar(props) {
  return (
    <Hidden mdDown>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Nova
          </Typography>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
}

export default SimpleAppBar;
