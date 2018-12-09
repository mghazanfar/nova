import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, IconButton } from '@material-ui/core';
import { Center } from '../ResponsiveRelated';

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
  const { back, onClick, icon, forward } = props;
  const handleClick = () => {
    back && props.history.goBack();
    forward && props.history.goForward();
    onClick && onClick();
  };
  return (
    <IconButton onClick={() => handleClick()}>
      {!back && !forward ? (
        icon
      ) : (
        <Center
          style={{
            border: '1px solid #1e3459',
            borderRadius: 50,
          }}
        >
          {icon}
        </Center>
      )}
    </IconButton>
  );
};

export default withStyles(styles)(withRouter(ThemedIconButton));
