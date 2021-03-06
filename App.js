import React from 'react';
import { StyleSheet, View } from 'react-native';

import Src from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Src/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B10AE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
