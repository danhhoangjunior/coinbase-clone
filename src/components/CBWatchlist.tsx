import React, { FC, useEffect, useState, useCallback } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import vars from '../env';
import Coin from '../models/Coin';
import CBWatchListItem from './CBWatchlistItem';
import * as watchlistActions from '../store/actions/watchlist';

const CBWatchList: FC = () => {
  const coinData = useSelector((state) => state.watchlist.coinData);
  const dispatch = useDispatch();

  const loadWatchlist = useCallback(async () => {
    try {
      await dispatch(watchlistActions.fetchCoinData());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadWatchlist();
  }, [loadWatchlist]);

  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'flex-start',
        marginLeft: '6%',
      }}
    >
      <Text style={styles.watchlistText}>Watchlist</Text>
      <View
        style={[{ height: coinData.length * 70 }, styles.watchlistContainer]}
      >
        <FlatList
          data={coinData}
          scrollEnabled={false}
          renderItem={(itemData) => {
            return (
              <CBWatchListItem
                id={itemData.item.id}
                name={itemData.item.name}
                symbol={itemData.item.symbol}
                price={itemData.item.price}
                percentChange={itemData.item.percentChange}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  watchlistText: {
    fontWeight: 'bold',
    fontSize: 21,
    marginTop: 48,
    marginBottom: 8,
  },
  watchlistContainer: {
    width: '88%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
});

export default CBWatchList;
