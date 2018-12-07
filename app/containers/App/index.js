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
import GlobalStyle from '../../global-styles';
import AppbarComponent from '../../components/Appbar';

export default function App() {
  return (
    <div>
      <AppbarComponent />
      <Grid container justify="center">
        <Grid item xs={12} md={4}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Grid>
      </Grid>
      <GlobalStyle />
    </div>
  );
}
