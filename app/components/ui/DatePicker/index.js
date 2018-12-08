import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '../Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#f68a71',
    },
  },
  cssFocused: {},
});

function DatePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <Input
        id="date"
        label="Date of birth"
        type="date"
        InputLabelProps={{
          shrink: true,
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        style={{ width: '100%' }}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
