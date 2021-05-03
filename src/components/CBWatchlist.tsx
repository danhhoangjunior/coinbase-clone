import React, { FC } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import CBWatchListItem from './CBWatchlistItem';

const CBWatchList: FC = () => {
  const numItems = 5;
  const listItems = [];
  for (let i = 0; i < numItems; i++) {
    listItems.push(<CBWatchListItem />);
  }

  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'flex-start',
        marginLeft: '7.5%',
      }}
    >
      <Text style={styles.watchlistText}>Watchlist</Text>
      <View style={[{ height: numItems * 70 }, styles.watchlistContainer]}>
        {listItems}
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
    width: '85%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
});

export default CBWatchList;
