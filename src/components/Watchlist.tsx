import React, { FC, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import * as Haptics from 'expo-haptics';

import WatchlistItem from './WatchlistItem';
import * as watchlistActions from '../store/actions/watchlist';
import Coin from '../models/Coin';
import Colors from '../constants/Colors';

interface TopMoversProps {
  coinData: Coin[];
}

const Watchlist: FC<TopMoversProps> = ({ coinData }) => {
  const dispatch = useDispatch();

  const renderItem = useCallback(
    ({ item, drag, isActive }: RenderItemParams<Coin>) => {
      return (
        <WatchlistItem
          id={item.id}
          name={item.name}
          symbol={item.symbol}
          price={item.price}
          percentChange={item.percentChange}
          drag={drag}
          isActive={isActive}
        />
      );
    },
    []
  );

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
        style={[{ height: coinData.length * 75 }, styles.watchlistContainer]}
      >
        <DraggableFlatList
          data={coinData}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          onDragBegin={() =>
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
          }
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
    fontWeight: '600',
    fontSize: 21,
    marginTop: 64,
    marginBottom: 10,
  },
  watchlistContainer: {
    width: '88%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.border,
    backgroundColor: 'white',
  },
});

export default Watchlist;
