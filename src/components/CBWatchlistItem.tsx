import React, { FC, useEffect } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';

interface WatchlistItemProps {
  name: string;
  symbol: string;
  price: number;
  percentChange: number;
}

const CBWatchListItem: FC<WatchlistItemProps> = ({
  name,
  symbol,
  price,
  percentChange,
}) => {
  return (
    <View style={styles.listItem}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
          }}
        />
        <View>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.tickerText}>{symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.priceText}>{price.toFixed(2)}</Text>
        <Text style={styles.changeText}>{percentChange.toFixed(2)}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    padding: 16,
    justifyContent: 'space-between',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 16,
    marginTop: 2,
  },
  nameText: {
    fontSize: 16,
  },
  tickerText: {
    color: 'rgb(79, 85, 102)',
    fontSize: 15,
  },
  priceText: {
    fontSize: 16,
  },
  changeText: {
    color: 'green',
    textAlign: 'right',
    fontSize: 15,
  },
});

export default CBWatchListItem;
