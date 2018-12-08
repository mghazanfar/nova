import React from 'react';
import { Card } from '@material-ui/core';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import ThemedCheckBox from '../ui/ThemedCheckBox';
import Input from '../ui/Input';
import Label from '../ui/Label';
import ThemedLink from '../ui/Label/ThemedLink';

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
      <Input label="Password" showHide type="password" />
      <ThemedCheckBox
        label={
          <Label>
            By agreeing you conform the{' '}
            <ThemedLink to="/">Nova Policy</ThemedLink> and{' '}
            <ThemedLink to="/">privacy agreement</ThemedLink> of data,{' '}
            <ThemedLink to="/">terms and conditions</ThemedLink>.
          </Label>
        }
      />
      <ThemedButton bg title="Sign In" />
      <ThemedButton outlined title="I'm new to Nova" />
      <ThemedButton link title="Forgot Password" />
    </Form>
  </Card>
);
export default SignInCard;
