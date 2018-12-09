import React from 'react';
import { IconButton, Grid, Hidden } from '@material-ui/core';
import { NotificationImportant, Group, LocationCity } from '@material-ui/icons';
import { Wrapper, ThemedGrey } from './CommonFooter.style';
import { SpaceBetween } from '../ui/ResponsiveRelated';

const Footer = props => {
  return (
    <Hidden mdDown>
      <Grid container justify="center">
        <Grid item md={10}>
          <Wrapper>
            <ThemedGrey>© 2018 Nova Inc. All rights reserved. </ThemedGrey>
            <ThemedGrey>Terms of use | Privacy Policy </ThemedGrey>
            <SpaceBetween style={{ minWidth: 150 }}>
              <IconButton href="https:/www.facebook.com">
                <NotificationImportant />
              </IconButton>
              <IconButton href="www.twitter.com">
                <Group />
              </IconButton>
              <IconButton href="/www.linkedin.com">
                <LocationCity />
              </IconButton>
            </SpaceBetween>
          </Wrapper>
        </Grid>
      </Grid>
    </Hidden>
  );
};

export default Footer;
