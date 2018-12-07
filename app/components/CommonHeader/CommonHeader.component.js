import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { FiftyBetween } from '../ui/ResponsiveRelated';

const CommonHeader = props => (
  <FiftyBetween>
    <Button>Back</Button>
    <Typography>{props.title}</Typography>
  </FiftyBetween>
);

export default CommonHeader;
