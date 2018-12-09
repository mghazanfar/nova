import React from 'react';
import { Card, withMobileDialog } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import ReactCodeInput from 'react-code-input';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import { CardTitle } from '../ui/Texts';
import { Center } from '../ui/ResponsiveRelated';
const props = {
  inputStyle: {
    fontFamily: 'monospace',
    margin: '4px',
    MozAppearance: 'textfield',
    width: '65px',
    borderRadius: '6px',
    fontSize: '21px',
    height: '65px',
    paddingLeft: '7px',
    backgroundColor: 'white',
    color: '#1e3459',
    border: '1px solid #9b9b9b',
    textAlign: 'center',
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
    const { fullScreen } = this.props;
    return (
      <Card
        elevation={fullScreen ? 0 : 5}
        style={{
          minHeight: 500,
          justifyContent: 'center',
          display: 'flex',
          padding: 40,
          boxShadow: !fullScreen && '0 2px 9px 0 rgba(134, 134, 134, 0.3)',
        }}
      >
        <Form style={{ marginTop: 16 }}>
          <CardTitle style={{ textAlign: 'center', marginBottom: 24 }}>
            Please enter a 4 digit code sent to your phone
          </CardTitle>
          <Center style={{ marginBottom: 24 }}>
            <ReactCodeInput type="text" fields={4} {...props} />
          </Center>
          <ThemedButton bg title="Enter" component={Link} to="/" />
        </Form>
      </Card>
    );
  }
}

export default withRouter(withMobileDialog()(SignUpPinCard));
