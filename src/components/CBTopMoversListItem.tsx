import React, { FC } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
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
  const animatedValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      underlayColor='#FAFBFE'
      onPress={() => {
        console.log(symbol);
      }}
      style={{ width: 143, marginRight: 17 }}
    >
      <Animated.View style={[styles.listItem, animatedStyle]}>
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
          <Text style={styles.changeText} numberOfLines={1} selectable>
            +{percentChange.toFixed(2)}%
          </Text>
        </View>
      </Animated.View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(223, 225, 226)',
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 16,
  },
  tickerText: {
    fontSize: 15,
    fontWeight: '600',
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
