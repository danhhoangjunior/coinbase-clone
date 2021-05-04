import React, { FC, useEffect, useState } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
} from 'react-native';
import vars from '../env';
import CBWatchListItem from './CBWatchlistItem';

class Coin {
  name: string;
  symbol: string;
  price: number;
  percentChange: number;

  constructor(
    name: string,
    symbol: string,
    price: number,
    percentChange: number
  ) {
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.percentChange = percentChange;
  }
}

const CBWatchList: FC = () => {
  //const [coinData, setCoinData] = useState<Coin[]>([]);
  const coinData: Coin[] = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const coins = ['BTC', 'ETH', 'EOS', 'BCH', 'ADA'];
    fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': vars.apiKey,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        coins.forEach((coin) => {
          const data = response.data.find((val) => val.symbol === coin);
          coinData.push(
            new Coin(
              data.name,
              data.symbol,
              data.quote.USD.price,
              data.quote.USD.percent_change_24h
            )
          );
        });
      })
      .then(() => {
        console.log(coinData);
      });
  };
  const numItems = 5;

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
        <FlatList
          data={coinData}
          keyExtractor={(item) => item.symbol}
          renderItem={(itemData) => {
            <CBWatchListItem
              name={itemData.item.name}
              symbol={itemData.item.symbol}
              price={itemData.item.price}
              percentChange={itemData.item.percentChange}
            />;
          }}
        />
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
