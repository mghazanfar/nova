import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    marginRight: 0,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

function FloatingActionButtons(props) {
  const { classes, title, bg, outlined, link } = props;
  return !link ? (
    <Fab
      variant={!link && 'extended'}
      aria-label="Delete"
      className={classes.fab}
      style={{
        background: !bg && 'transparent',
        border: outlined && '1px solid #FF8E53',
        color: (outlined || link) && '#FF8E53',
        boxShadow: (outlined || link) && '0 3px 5px 2px rgba(0,0,0,0)',
      }}
      {...props}
    >
      {title}
    </Fab>
  ) : (
    <Button
      style={{
        color: '#FF8E53',
        borderRadius: 24,
      }}
      {...props}
    >
      {title}
    </Button>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
