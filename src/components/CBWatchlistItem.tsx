import React, { FC } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
} from 'react-native';

const CBWatchListItem: FC = () => {
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
        <View style={styles.name}>
          <Text style={styles.nameText}>Bitcoin</Text>
          <Text style={styles.tickerText}>BTC</Text>
        </View>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>$57,550.00</Text>
        <Text style={styles.changeText}>+1.43%</Text>
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
