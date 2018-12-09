import React from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { FiftyBetween, SpaceBetween } from '../ui/ResponsiveRelated';
import IconButton from '../ui/IconButton';
import { HeaderTitle } from '../ui/Texts';

const CommonHeader = props => (
  <FiftyBetween>
    <SpaceBetween style={{ minWidth: 100 }}>
      <IconButton icon={<ChevronLeft style={{ color: '#1e3459' }} />} back />
      <IconButton icon={<ChevronRight style={{ marginLeft: 2 }} />} forward />
    </SpaceBetween>
    <HeaderTitle>{props.title}</HeaderTitle>
  </FiftyBetween>
);

export default CommonHeader;
