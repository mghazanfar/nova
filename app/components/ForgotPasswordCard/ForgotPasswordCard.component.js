import React from 'react';
import { Card } from '@material-ui/core';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import Input from '../ui/Input';

const SignInCard = props => (
  <Card
    elevation={12}
    style={{
      minHeight: 500,
      justifyContent: 'center',
      display: 'flex',
    }}
  >
    <Form style={{ marginTop: 86 }}>
      <Input label="Email" />
      <ThemedButton bg title="Send reset password link" />
    </Form>
  </Card>
);
export default SignInCard;
