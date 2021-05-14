import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Portfolio':
            iconName = 'pie-chart';
            break;
          case 'Prices':
            iconName = 'cellular';
            break;
          default:
            iconName = 'person';
        }
        const animatedValue = new Animated.Value(1);

        const handlePressIn = () => {
          Animated.spring(animatedValue, {
            toValue: 0.98,
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
          <Animated.View style={[styles.tabBarItem, animatedStyle]}>
            <TouchableOpacity
              onPress={onPress}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              style={{ alignItems: 'center' }}
            >
              <Ionicons
                name={iconName}
                size={20}
                color={isFocused ? Colors.cbBlue : Colors.subtitle}
                style={{ marginBottom: 2 }}
              />
              <Text
                style={[
                  { color: isFocused ? Colors.cbBlue : Colors.subtitle },
                  styles.tabBarText,
                ]}
                selectable
              >
                {route.name}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 85,
    borderColor: 'white',
    borderTopColor: Colors.border,
    borderWidth: 1,
    justifyContent: 'space-evenly',
  },
  tabBarItem: {
    marginTop: 10,
  },
  tabBarText: {
    fontSize: 10,
    fontWeight: '700',
  },
});

export default TabBar;
