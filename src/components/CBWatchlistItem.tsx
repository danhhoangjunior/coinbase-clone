import React, { FC } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

interface WatchlistItemProps {
  id: number;
  name: string;
  symbol: string;
  price: number;
  percentChange: number;
  drag: any;
  isActive: any;
}

const CBWatchListItem: FC<WatchlistItemProps> = ({
  id,
  name,
  symbol,
  price,
  percentChange,
  drag,
  isActive,
}) => {
  return (
    <TouchableHighlight
      underlayColor={isActive ? 'white' : '#FAFBFE'}
      onLongPress={drag}
      onPress={() => {
        console.log(symbol);
      }}
    >
      <View
        style={
          isActive ? [styles.activeListItem, styles.listItem] : styles.listItem
        }
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={styles.logo}
            source={{
              uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id.toString()}.png`,
            }}
          />
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.tickerText}>{symbol}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.priceText}>
            $
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          <Text
            style={[
              {
                color:
                  percentChange > 0 ? 'rgb(11, 130, 82)' : 'rgb(204, 26, 46)',
              },
              styles.changeText,
            ]}
          >
            {percentChange > 0 ? '+' : ''}
            {percentChange.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableHighlight>
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
  activeListItem: {
    backgroundColor: 'white',
    opacity: 0.9,
    shadowColor: 'black',
    shadowRadius: 15,
    shadowOpacity: 0.05,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  nameText: {
    fontSize: 17,
  },
  tickerText: {
    color: 'rgb(79, 85, 102)',
    fontSize: 16,
  },
  priceText: {
    fontSize: 17,
    textAlign: 'right',
  },
  changeText: {
    textAlign: 'right',
    fontSize: 16,
  },
});

export default CBWatchListItem;
