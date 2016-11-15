/* @flow */
import React from 'react';
import { CenteredContainer, Text } from '../app/components';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});

const HomePage = () => (
  <CenteredContainer>
    <Text style={styles.text}>
      {Platform.select({
        android: `
          React Universal App
          Double tap R on your keyboard to reload
          Shake or press menu button for dev menu
        `,
        ios: `
          React Universal App
          Press CMD+R to reload
          Press CMD+D for debug menu
        `,
      })}
    </Text>
  </CenteredContainer>
);

export default HomePage;
