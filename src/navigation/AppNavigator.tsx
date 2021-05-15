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
import ActionsScreen from '../screens/Actions';

export type RootStackParamList = {
  HomeScreen: undefined;
  News: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={NewsOptions}>
      <HomeStackNavigator.Screen
        name='HomeScreen'
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
      <TabBarNavigator.Screen name='Home' component={HomeNavigator} />
      <TabBarNavigator.Screen name='Portfolio' component={PortfolioScreen} />
      <TabBarNavigator.Screen name='Actions' component={ActionsScreen} />
      <TabBarNavigator.Screen name='Prices' component={PricesScreen} />
      <TabBarNavigator.Screen name='Settings' component={SettingsScreen} />
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
