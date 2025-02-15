import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppChecker from './src/components/AppChecker';

export default function App() {
  return (
    <View style={styles.container}>
      <AppChecker/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
