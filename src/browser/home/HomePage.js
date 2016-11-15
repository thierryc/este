/* @flow */
import React from 'react';
import {
  Block,
  Image,
  Link,
  PageHeader,
  SwitchTheme,
  Title,
  View,
} from '../app/components';

const HomePage = () => (
  <View>
    <Title message="React universal app" />
    <PageHeader
      description="Starter kit for universal full–fledged React apps. One stack
        for browser, mobile, server."
      heading="React Universal App"
    />

    {/* This is a block with margin-bottom: scale[4]. Inline styles rocks. */}
    <Block mb={4}>
      <p><Link to="https://github.com/thierryc/react-universal-apps">
        github.com/thierryc/react-universal-apps
      </Link></p>

      <p><Link to="https://github.com/este/este">
        Este Fork from github.com/este/este
      </Link></p>
    </Block>

    <SwitchTheme />
    <Image
      alt="50x50 placeholder"
      mt={2}
      src={require('./50x50.png')}
    />
  </View>
);

export default HomePage;
