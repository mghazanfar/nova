import React from 'react';
import { Card, withMobileDialog } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import { CardTitle } from '../ui/Texts';

// eslint-disable-next-line react/prefer-stateless-function
class SignUpNext extends React.Component {
  render() {
    // const { email } = this.props.match.params; can be used if needed
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
          <CardTitle style={{ marginBottom: 24 }}>Hey there :)</CardTitle>
          <CardTitle style={{ marginBottom: 24 }}>
            I'm Nova, Welcome to the community.
          </CardTitle>
          <CardTitle style={{ marginBottom: 24 }}>
            Before we continue, let us know if you are legal representative of
            the company.
          </CardTitle>
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

export default withRouter(withMobileDialog()(SignUpNext));
