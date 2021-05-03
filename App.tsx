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

export default function App() {
  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.btnContainer, animatedStyle]}>
        <TouchableHighlight
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={{ borderRadius: 8 }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Add payment method</Text>
          </View>
        </TouchableHighlight>
      </Animated.View>
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
  btnContainer: {
    width: '85%',
    borderRadius: 8,
  },
  btn: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 82, 248)',
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
