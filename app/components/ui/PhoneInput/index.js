import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputComponent from '../Input';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    label: 'Pakistan',
    value: '+92',
  },
  {
    label: 'United States',
    value: '+1',
  },
  {
    label: 'China',
    value: '+51',
  },
];

class OutlinedTextFields extends React.Component {
  state = {
    currency: '+92',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <InputComponent
          id="outlined-select-currency"
          select
          label="Country"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </InputComponent>
        <InputComponent
          placeholder="Phone number"
          mb0
          style={{ width: '78%' }}
        />
      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
