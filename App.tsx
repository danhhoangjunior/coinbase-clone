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
import Home from './src/screens/Home';

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
