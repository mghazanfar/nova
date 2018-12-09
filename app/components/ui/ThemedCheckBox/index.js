import React from 'react';
import { Checkbox, withStyles, FormControlLabel } from '@material-ui/core';
const styles = {
  root: {
    color: '#f68a71',
    '&$checked': {
      color: '#f68a71',
    },
  },
  checked: {},
};

const ThemedCheckBox = props => {
  const { classes, label } = props;
  return (
    <FormControlLabel
      control={
        <Checkbox
          value="checkedG"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      }
      label={label}
    />
  );
};

export default withStyles(styles)(ThemedCheckBox);
