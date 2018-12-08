import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import Form from '../ui/Form';
import ThemedButton from '../ui/ThemedButton';
import Input from '../ui/Input';
import DatePicker from '../ui/DatePicker';
import PhoneInput from '../ui/PhoneInput';

const SignUpForm = props => (
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
      <Input label="First Name" style={{ marginTop: 16, marginBottom: 16 }} />
      <Input label="Middle Name" />
      <Input label="Last Name" />
      <DatePicker />
      <PhoneInput />
      <Input label="Nationality" />
      <Input label="Company Name" />
      <Input label="Role in company" />
      <ThemedButton bg title="Next" component={Link} to="/" />
    </Form>
  </Card>
);
export default SignUpForm;
