import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import TabBar from '../components/TabBar';
import HomeScreen, { screenOptions as HomeOptions } from '../screens/Home';
import NewsScreen, { screenOptions as NewsOptions } from '../screens/News';
import PortfolioScreen from '../screens/Portfolio';
import PricesScreen from '../screens/Prices';
import SettingsScreen from '../screens/Settings';

const HomeStackNavigator = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={NewsOptions}>
      <HomeStackNavigator.Screen
        name='Home'
        component={HomeScreen}
        options={HomeOptions}
      />
      <HomeStackNavigator.Screen name='News' component={NewsScreen} />
    </HomeStackNavigator.Navigator>
  );
};

const TabBarNavigator = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabBarNavigator.Navigator tabBar={(props) => <TabBar {...props} />}>
      <TabBarNavigator.Screen name='HomeTab' component={HomeNavigator} />
      <TabBarNavigator.Screen name='PortfolioTab' component={PortfolioScreen} />
      <TabBarNavigator.Screen name='PricesTab' component={PricesScreen} />
      <TabBarNavigator.Screen name='SettingsTab' component={SettingsScreen} />
    </TabBarNavigator.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
