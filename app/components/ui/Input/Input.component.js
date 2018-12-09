import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import PinkPointer from '../PinkPointer';

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

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { type: this.props.type };
  }

  toggleInputType = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ type: this.state.type === 'text' ? 'password' : 'text' });
  };

  render() {
    const { classes, label, showHide, mb0 } = this.props;
    const { type } = this.state;
    return (
      <TextField
        style={{ marginBottom: !mb0 && 18 }}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          endAdornment: showHide && (
            <PinkPointer onClick={() => this.toggleInputType()}>
              {type === 'password' ? 'Show' : 'Hide'}
            </PinkPointer>
          ),
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label={label}
        variant="outlined"
        {...this.props}
        type={type}
      />
    );
  }
}

export default withStyles(styles)(Input);
