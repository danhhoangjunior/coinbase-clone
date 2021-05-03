import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  ScrollView,
} from 'react-native';
import CBButton from './src/components/CBButton';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CBButton title='Add payment method' />

      <StatusBar style='auto' />
    </ScrollView>
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
