import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';

// eslint-disable-next-line react/prefer-stateless-function
class ResetPasswordCard extends React.Component {
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
          <Typography>A reset password link is sent to {email}</Typography>
          <Typography>
            Please check your email including your spam folder
          </Typography>
          <ThemedButton bg title="Back to sign in" component={Link} to="/" />
        </Form>
      </Card>
    );
  }
}

export default withRouter(ResetPasswordCard);
