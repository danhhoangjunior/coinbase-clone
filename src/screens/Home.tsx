import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import CBButton from '../components/CBButton';

const Home: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.imgur.com/9EEaSaS.png' }}
        />
        <Text style={styles.title}>Welcome to Coinbase!</Text>
        <Text style={styles.subtitle}>Make your first investment today</Text>
        <CBButton title='Add payment method' />
        <Text style={styles.watchlistText}>Watchlist</Text>
        <View style={styles.watchlistContainer}></View>
        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  image: {
    height: 250,
    width: 150,
    marginTop: 40,
  },
  title: {
    fontWeight: '600',
    letterSpacing: 0.5,
    fontSize: 21,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 24,
    color: 'rgb(92, 98, 110)',
  },
  watchlistText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 21,
    marginTop: 48,
    marginBottom: 8,
    marginLeft: '7.5%',
  },
  watchlistContainer: {
    width: '85%',
    borderWidth: 1,
    height: 350,
    borderRadius: 8,
    borderColor: '#ccc',
  },
});

export default Home;
