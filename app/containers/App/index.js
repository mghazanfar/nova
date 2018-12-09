/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SignUp from 'containers/SignUp/Loadable';
import SignUpNext from 'containers/SignUpNext/Loadable';
import SignUpNat from 'containers/SignUpNat/Loadable';
import SignUpForm from 'containers/SignUpForm/Loadable';
import SignUpPin from 'containers/SignUpPin/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ResetPassword from 'containers/ResetPassword';

import { Grid } from '@material-ui/core';
import ForgotPassword from '../ForgotPassword';
import AppbarComponent from '../../components/Appbar';
import Footer from '../../components/CommonFooter';
import { AppWrapper } from './App.style';
import { Flex1 } from '../../components/ui/ResponsiveRelated';

export default function App() {
  return (
    <AppWrapper>
      <AppbarComponent />
      <Flex1>
        <Grid container justify="center">
          <Grid item xs={12} md={4}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/sign-up-next" component={SignUpNext} />
              <Route exact path="/sign-up-nat" component={SignUpNat} />
              <Route exact path="/sign-up-form" component={SignUpForm} />
              <Route exact path="/sign-up-pin" component={SignUpPin} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/reset-password/:email" component={ResetPassword} />
              <Route component={NotFoundPage} />
            </Switch>
          </Grid>
        </Grid>
      </Flex1>
      <Footer />
    </AppWrapper>
  );
}
