import React, { FC } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

interface TopMoversListItemProps {
  id: number;
  symbol: string;
  price: number;
  percentChange: number;
}

const CBTopMoversListItem: FC<TopMoversListItemProps> = ({
  id,
  symbol,
  price,
  percentChange,
}) => {
  return (
    <TouchableHighlight
      underlayColor='#FAFBFE'
      style={styles.listItem}
      onPress={() => {
        console.log(symbol);
      }}
    >
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id.toString()}.png`,
          }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.tickerText}>{symbol}</Text>
          <Text style={styles.priceText}>
            $
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View>
          <Text style={styles.changeText} numberOfLines={1}>
            +{percentChange.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: 140,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(223, 225, 226)',
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginRight: 15,
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 12,
  },
  tickerText: {
    fontSize: 15,
    fontWeight: '500',
    marginRight: 5,
  },
  priceText: {
    fontSize: 15,
    color: 'rgb(79, 85, 102)',
  },
  changeText: {
    fontSize: 26,
    marginTop: 2,
    color: 'rgb(11, 130, 82)',
  },
});

export default CBTopMoversListItem;
