import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Tourist Info Map
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Enjoy your Trip!
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
