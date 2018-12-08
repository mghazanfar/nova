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
import NotFoundPage from 'containers/NotFoundPage/Loadable';

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
              <Route path="/forgot-password" component={ForgotPassword} />
              {/* <Route component={NotFoundPage} /> */}
            </Switch>
          </Grid>
        </Grid>
      </Flex1>
      <Footer />
    </AppWrapper>
  );
}
