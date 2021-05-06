import React, { FC, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CBWatchListItem from './CBWatchlistItem';
import * as watchlistActions from '../store/actions/watchlist';
import { CoinState } from '../store/reducers/watchlist';

interface RootState {
  watchlist: CoinState;
}

const CBTopMovers: FC = () => {
  const coinData = useSelector((state: RootState) => state.watchlist.coinData);

  const dispatch = useDispatch();

  const loadTopMovers = useCallback(async () => {
    try {
      dispatch(watchlistActions.fetchCoinData());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadTopMovers();
  }, [loadTopMovers]);

  type Item = {
    id: number;
    name: string;
    symbol: string;
    price: number;
    percentChange: number;
  };

  const renderItem = () => {
    return <View></View>;
  };

  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'flex-start',
        marginLeft: '6%',
      }}
    >
      <Text style={styles.topMoversText}>Top movers</Text>
      <View
        style={[{ height: coinData.length * 70 }, styles.topMoversContainer]}
      >
        <FlatList
          data={coinData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topMoversText: {
    fontWeight: '600',
    fontSize: 21,
    marginTop: 64,
    marginBottom: 10,
  },
  topMoversContainer: {
    width: '88%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(223, 225, 226)',
    backgroundColor: 'white',
  },
});

export default CBTopMovers;
