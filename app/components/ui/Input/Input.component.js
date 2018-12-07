import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

const styles = theme => ({
  cssLabel: {
    '&$cssFocused': {
      color: '#f68a71',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#f68a71',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#f68a71',
    },
  },
  notchedOutline: {},
});

const Input = props => {
  const { classes, label } = props;
  return (
    <TextField
      style={{ marginBottom: 16 }}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      label={label}
      variant="outlined"
      id="custom-css-outlined-input"
    />
  );
};

export default withStyles(styles)(Input);
