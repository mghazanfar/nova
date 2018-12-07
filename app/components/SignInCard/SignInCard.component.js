import React from 'react';
import { Card } from '@material-ui/core';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import ThemedCheckBox from '../ui/ThemedCheckBox';
import Input from '../ui/Input';

const SignInCard = props => (
  <Card
    elevation={12}
    style={{
      minHeight: 500,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    }}
  >
    <Form>
      <Input label="Email" />
      <Input label="Password" />
      <ThemedCheckBox label="By singing in, I agree,By singing in, I agree.." />
      <ThemedButton title="Sign In" />
      <ThemedButton title="I'm new to Nova" />
      <ThemedButton title="Forgot Password" />
    </Form>
  </Card>
);
export default SignInCard;
