import React, { FC, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as topMoversActions from '../store/actions/topmovers';
import { TopMoversState } from '../store/reducers/topmovers';
import CBTopMoversListItem from './CBTopMoversListItem';

interface RootState {
  topMovers: TopMoversState;
}

const CBTopMovers: FC = () => {
  const coinData = useSelector(
    (state: RootState) => state.topMovers.topMoversData
  );

  const dispatch = useDispatch();

  const loadTopMovers = useCallback(async () => {
    try {
      dispatch(topMoversActions.fetchTopMoversData());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    loadTopMovers();
  }, [loadTopMovers]);

  type Item = {
    id: string;
    name: string;
    symbol: string;
    price: string;
    percentChange: string;
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
              name={itemData.item.name}
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
