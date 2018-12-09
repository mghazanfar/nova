import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';

// eslint-disable-next-line react/prefer-stateless-function
class SignUpNext extends React.Component {
  render() {
    // const { email } = this.props.match.params; can be used if needed
    return (
      <Card
        elevation={5}
        style={{
          minHeight: 500,
          justifyContent: 'center',
          display: 'flex',
          padding: 40,
        }}
      >
        <Form style={{ marginTop: 86 }}>
          <Typography>Hey there :)</Typography>
          <Typography>I'm Nova, Welcome to the community.</Typography>
          <Typography>
            Before we continue, let us know if you are legal representative of
            the company.
          </Typography>
          <ThemedButton
            bg
            title="I'm the legal representative"
            component={Link}
            to="/sign-up-nat"
          />
          <ThemedButton
            outlined
            title="I'm NOT the legal representative"
            component={Link}
            to="/"
          />
        </Form>
      </Card>
    );
  }
}

export default withRouter(SignUpNext);
