import React from 'react';
import { Link } from 'react-router-dom';
import { Card, withMobileDialog } from '@material-ui/core';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import ThemedCheckBox from '../ui/ThemedCheckBox';
import Input from '../ui/Input';
import Label from '../ui/Label';
import ThemedLink from '../ui/Label/ThemedLink';

const SignInCard = props => {
  const { fullScreen } = props;
  return (
    <Card
      elevation={fullScreen ? 0 : 5}
      style={{
        minHeight: 500,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: 40,
        boxShadow: !fullScreen && '0 2px 9px 0 rgba(134, 134, 134, 0.3)',
      }}
    >
      <Form>
        <Input label="Email" />
        <Input label="Password" showHide type="password" mb0 />
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
        <div style={{ marginTop: 19, width: '100%' }}>
          <ThemedButton bg title="Sign In" />
        </div>
        <ThemedButton
          outlined
          title="I'm new to Nova"
          component={Link}
          to="/sign-up"
        />
        <ThemedButton
          link
          title="Forgot Password"
          component={Link}
          to="/forgot-password"
        />
      </Form>
    </Card>
  );
};
export default withMobileDialog()(SignInCard);
