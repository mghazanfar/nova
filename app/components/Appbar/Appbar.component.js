import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

function SimpleAppBar(props) {
  return (
    <Hidden mdDown>
      <AppBar
        position="static"
        color="inherit"
        style={{
          boxShadow: '0 2px 9px 0 rgba(134, 134, 134, 0.3)',
        }}
      >
        <Toolbar>
          <Typography style={{ color: '#1e3459', fontSize: 48 }}>
            NOVA
          </Typography>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
}

export default SimpleAppBar;
