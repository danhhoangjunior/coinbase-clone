import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, FC } from 'react';
import {
  StyleSheet,
  Text,
  RefreshControl,
  ScrollView,
  SafeAreaView,
  Image,
  LogBox,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as watchlistActions from '../store/actions/watchlist';
import * as topMoversActions from '../store/actions/topmovers';
import { WatchlistState } from '../store/reducers/watchlist';
import { TopMoversState } from '../store/reducers/topmovers';

import CBButton from '../components/CBButton';
import TopMoversList from '../components/TopMoversList';
import Watchlist from '../components/Watchlist';

interface RootState {
  watchlist: WatchlistState;
  topMovers: TopMoversState;
}

const Home: FC = () => {
  const watchlistData = useSelector(
    (state: RootState) => state.watchlist.watchlistData
  );
  const topMoversData = useSelector(
    (state: RootState) => state.topMovers.topMoversData
  );
  const [refreshing, setRefreshing] = React.useState(false);

  const dispatch = useDispatch();

  const loadData = useCallback(async () => {
    try {
      dispatch(watchlistActions.fetchCoinData());
      dispatch(topMoversActions.fetchTopMoversData());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    loadData();
  }, [loadData]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadData().then(() => {
      setRefreshing(false);
    });
  }, [loadData, refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor='rgb(233, 233, 243)'
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Image
          style={styles.image}
          source={{ uri: 'https://i.imgur.com/9EEaSaS.png' }}
        />
        <Text style={styles.title}>Welcome to Coinbase!</Text>
        <Text style={styles.subtitle}>Make your first investment today</Text>
        <CBButton title='Buy crypto' />
        <Watchlist coinData={watchlistData} />
        <TopMoversList coinData={topMoversData} />
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
});

export default Home;
