import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import TopMoversListItem from './TopMoversListItem';

const TopMovers: FC<any> = ({ coinData }) => {
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
