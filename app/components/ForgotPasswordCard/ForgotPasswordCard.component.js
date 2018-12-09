import React from 'react';
import { Card } from '@material-ui/core';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import Input from '../ui/Input';
import { Link } from 'react-router-dom';

class ForgotPasswordCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  render() {
    const { email } = this.state;
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
        <Form style={{ marginTop: 48 }}>
          <Input
            label="Email"
            onChange={e => this.setState({ email: e.target.value })}
            value={email}
          />
          <ThemedButton
            bg
            title="Send reset password link"
            component={Link}
            to={`/reset-password/${email}`}
          />
        </Form>
      </Card>
    );
  }
}

export default ForgotPasswordCard;
