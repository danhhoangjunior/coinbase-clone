import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Coin from '../models/Coin';

import TopMoversListItem from './TopMoversListItem';

interface TopMoversProps {
  coinData: Coin[];
}

const TopMovers: FC<TopMoversProps> = ({ coinData }) => {
  return (
    <View style={styles.list}>
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
            <TopMoversListItem
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
  list: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  topMoversText: {
    fontWeight: '600',
    fontSize: 21,
    marginTop: 32,
    marginBottom: 10,
    marginLeft: '6%',
  },
  topMoversContainer: {
    height: 160,
    paddingLeft: '6%',
  },
});

export default TopMovers;
