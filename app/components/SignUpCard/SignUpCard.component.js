import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography } from '@material-ui/core';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import ThemedCheckBox from '../ui/ThemedCheckBox';
import Input from '../ui/Input';
import Label from '../ui/Label';
import ThemedLink from '../ui/Label/ThemedLink';

const SignUpCard = props => (
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
      <Typography>
        Be the first to know when we launch evva business account.
      </Typography>
      <Typography style={{ marginBottom: 16 }}>
        Meanwhile you will get prime access to our series, workshops and events
      </Typography>
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
      <ThemedButton bg title="Next" component={Link} to="/sign-up-next" />
      <ThemedButton
        outlined
        title="Already on nova? Sign in"
        component={Link}
        to="/"
      />
    </Form>
  </Card>
);
export default SignUpCard;
