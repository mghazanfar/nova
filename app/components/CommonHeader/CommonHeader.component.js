import React from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Chat from '@material-ui/icons/ChatBubbleOutline';
import { FiftyBetween, SpaceBetween } from '../ui/ResponsiveRelated';
import IconButton from '../ui/IconButton';
import { HeaderTitle } from '../ui/Texts';
import { withMobileDialog } from '@material-ui/core';

const CommonHeader = props => {
  const { fullScreen } = props;
  return (
    <SpaceBetween
      style={{
        alignItems: 'center',
        marginTop: 28,
      }}
    >
      <FiftyBetween>
        <SpaceBetween style={{ minWidth: 100 }}>
          <IconButton
            icon={<ChevronLeft style={{ color: '#1e3459' }} />}
            back
          />
          <IconButton
            icon={<ChevronRight style={{ marginLeft: 1, color: '#1e3459' }} />}
            forward
          />
        </SpaceBetween>
        <HeaderTitle>{props.title}</HeaderTitle>
      </FiftyBetween>
      {fullScreen && (
        <IconButton
          icon={<Chat style={{ color: '#1e3459' }} />}
          onClick={() => console.log('Chat Clicked')}
        />
      )}
    </SpaceBetween>
  );
};

export default withMobileDialog()(CommonHeader);
