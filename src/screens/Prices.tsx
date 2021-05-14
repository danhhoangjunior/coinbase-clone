import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Prices = () => {
  return (
    <View style={styles.screen}>
      <Text>Prices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Prices;
