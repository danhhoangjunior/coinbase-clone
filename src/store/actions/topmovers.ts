import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { TopMoversState } from '../reducers/topmovers';
import Coin from '../../models/Coin';
import cmpData from '../../data/CoinMarketCapData';

export const SET_TOPMOVERS_DATA = 'SET_TOPMOVERS_DATA';

export const fetchTopMoversData = () => {
  return async (dispatch: ThunkDispatch<TopMoversState, void, Action>) => {
    try {
      // Fetch all coins available on Coinbase
      let availableCoins: Set<String[]> = new Set([]);

      const coinbaseResponse = await fetch(
        'https://api.pro.coinbase.com/products'
      );
      const coinbaseResponseData = await coinbaseResponse.json();

      coinbaseResponseData.filter((coin) => coin.quote_currency === 'USD');
      coinbaseResponseData.forEach((coin) => {
        availableCoins.add(coin.base_currency);
      });

      const coinMarketCapResponse = await fetch(
        `https://api.coincap.io/v2/assets`
      );
      const coinMarketCapResponseData = await coinMarketCapResponse.json();

      // Sort by percent change 24hrs (descending)
      coinMarketCapResponseData.data.sort((a, b) =>
        parseFloat(a.changePercent24Hr) < parseFloat(b.changePercent24Hr)
          ? 1
          : -1
      );

      // Get top 6 movers which are available on Coinbase
      const coinData: Coin[] = [];
      for (let data of coinMarketCapResponseData.data) {
        if (availableCoins.has(data.symbol)) {
          coinData.push(
            new Coin(
              cmpData.data.find((coin) => data.symbol === coin.symbol).id,
              data.name,
              data.symbol,
              data.priceUsd,
              data.changePercent24Hr
            )
          );
        }
        if (coinData.length === 6) {
          break;
        }
      }

      dispatch({
        type: SET_TOPMOVERS_DATA,
        coinData: coinData,
      });
    } catch (err) {
      throw err;
    }
  };
};
