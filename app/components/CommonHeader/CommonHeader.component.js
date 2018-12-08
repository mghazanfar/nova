import React from 'react';
import { Typography } from '@material-ui/core';
import { FiftyBetween, SpaceBetween } from '../ui/ResponsiveRelated';
import IconButton from '../ui/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const CommonHeader = props => (
  <FiftyBetween>
    <SpaceBetween style={{ minWidth: 100 }}>
      <IconButton icon={<ChevronLeft />} back />
      <IconButton icon={<ChevronRight />} />
    </SpaceBetween>
    <Typography>{props.title}</Typography>
  </FiftyBetween>
);

export default CommonHeader;
