import React, { FC, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as watchlistActions from '../store/actions/watchlist';
import { CoinState } from '../store/reducers/watchlist';
import CBTopMoversListItem from './CBTopMoversListItem';

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

  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'flex-start',
      }}
    >
      <Text style={styles.topMoversText}>Top movers</Text>
      <FlatList
        data={coinData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToOffsets={[...Array(coinData.length)].map((x, i) => 158 * i + 162)}
        decelerationRate={0}
        snapToAlignment='center'
        contentContainerStyle={styles.topMoversContainer}
        renderItem={(itemData) => {
          return (
            <CBTopMoversListItem
              id={itemData.item.id}
              symbol={itemData.item.symbol}
              price={itemData.item.price}
              percentChange={itemData.item.percentChange}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topMoversText: {
    fontWeight: '600',
    fontSize: 21,
    marginTop: 32,
    marginBottom: 10,
    marginLeft: 25,
  },
  topMoversContainer: {
    height: 160,
    paddingLeft: '6%',
  },
});

export default CBTopMovers;
