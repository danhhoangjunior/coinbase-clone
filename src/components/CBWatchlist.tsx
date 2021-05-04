import React, { FC, useEffect, useState, useCallback } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
  LogBox,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

import vars from '../env';
import Coin from '../models/Coin';
import CBWatchListItem from './CBWatchlistItem';
import * as watchlistActions from '../store/actions/watchlist';

const CBWatchList: FC = () => {
  const coinData = useSelector((state) => state.watchlist.coinData);

  const dispatch = useDispatch();

  const loadWatchlist = useCallback(async () => {
    try {
      dispatch(watchlistActions.fetchCoinData());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    loadWatchlist();
  }, [loadWatchlist]);

  type Item = {
    id: number;
    name: string;
    symbol: string;
    price: number;
    percentChange: number;
  };

  const renderItem = useCallback(({ item, drag }: RenderItemParams<Item>) => {
    return (
      <CBWatchListItem
        id={item.id}
        name={item.name}
        symbol={item.symbol}
        price={item.price}
        percentChange={item.percentChange}
        drag={drag}
      />
    );
  }, []);

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
        <DraggableFlatList
          data={coinData}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          onDragEnd={({ data }) => {
            dispatch(watchlistActions.updateCoinData(data));
          }}
          renderItem={renderItem}
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
