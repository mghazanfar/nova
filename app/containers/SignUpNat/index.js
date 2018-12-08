/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Fragment } from 'react';
import CommonHeader from '../../components/CommonHeader';
import SignUpNatCard from '../../components/SignUpNatCard';

/* eslint-disable react/prefer-stateless-function */
export default class SignUpNat extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <CommonHeader title="Sign up" />
        <SignUpNatCard />
      </Fragment>
    );
  }
}
