import React from 'react';
import { Card, withMobileDialog } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import { CardTitle } from '../ui/Texts';

// eslint-disable-next-line react/prefer-stateless-function
class ResetPasswordCard extends React.Component {
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
        <Form style={{ marginTop: 48 }}>
          <CardTitle style={{ marginBottom: 24 }}>
            A reset password link is sent to {email}
          </CardTitle>
          <CardTitle style={{ marginBottom: 24 }}>
            Please check your email including your spam folder
          </CardTitle>
          <ThemedButton bg title="Back to sign in" component={Link} to="/" />
        </Form>
      </Card>
    );
  }
}

export default withRouter(withMobileDialog()(ResetPasswordCard));
