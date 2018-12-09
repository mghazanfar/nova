import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import ReactCodeInput from 'react-code-input';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import { Center } from '../ui/ResponsiveRelated';
const props = {
  inputStyle: {
    fontFamily: 'monospace',
    margin: '4px',
    MozAppearance: 'textfield',
    width: '15px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '26px',
    paddingLeft: '7px',
    backgroundColor: 'white',
    color: 'lightskyblue',
    border: '1px solid lightskyblue',
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin: '4px',
    MozAppearance: 'textfield',
    width: '15px',
    borderRadius: '3px',
    fontSize: '14px',
    height: '26px',
    paddingLeft: '7px',
    backgroundColor: 'black',
    color: 'red',
    border: '1px solid red',
  },
};
// eslint-disable-next-line react/prefer-stateless-function
class SignUpPinCard extends React.Component {
  render() {
    const { email } = this.props.match.params;
    return (
      <Card
        elevation={12}
        style={{
          minHeight: 500,
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Form style={{ marginTop: 86 }}>
          <Typography>
            Please enter a 4 digit code sent to your phone
          </Typography>
          <Center>
            <ReactCodeInput type="text" fields={4} {...props} />
          </Center>
          <ThemedButton bg title="Enter" component={Link} to="/" />
        </Form>
      </Card>
    );
  }
}

export default withRouter(SignUpPinCard);
