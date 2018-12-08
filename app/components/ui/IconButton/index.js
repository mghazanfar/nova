import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, IconButton } from '@material-ui/core';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    border: '1px solid black',
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ThemedIconButton = props => {
  const { back, onClick, icon } = props;
  const handleClick = () => {
    props.history.goBack();
    onClick && onClick();
  };
  return (
    <IconButton onClick={back ? handleClick() : onClick && onClick()}>
      {icon}
    </IconButton>
  );
};

export default withStyles(styles)(withRouter(ThemedIconButton));
