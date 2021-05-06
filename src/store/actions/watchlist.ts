import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { CoinState } from '../reducers/watchlist';
import vars from '../../env';
import Coin from '../../models/Coin';
import dummy from './DUMMY';

export const SET_DATA = 'SET_DATA';

export const fetchCoinData = () => {
  return async (dispatch: ThunkDispatch<CoinState, void, Action>) => {
    const coins = ['ETC', 'EOS', 'XTZ', 'SUSHI', '1INCH', 'XLM'];

    try {
      const response = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
        {
          headers: {
            'X-CMC_PRO_API_KEY': vars.apiKey,
          },
        }
      );
      // const resData = dummy;
      const resData = await response.json();
      const coinData: Coin[] = [];
      coins.forEach((coin) => {
        const data = resData.data.find((val: Coin) => val.symbol === coin);
        coinData.push(
          new Coin(
            data.id,
            data.name,
            data.symbol,
            data.quote.USD.price,
            data.quote.USD.percent_change_24h
          )
        );
      });

      dispatch({
        type: SET_DATA,
        coinData: coinData,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const updateCoinData = (newData: Coin[]) => {
  return async (dispatch: ThunkDispatch<CoinState, void, Action>) => {
    dispatch({
      type: SET_DATA,
      coinData: newData,
    });
  };
};

export const fetchTopMoversData = () => {
  return async (dispatch: ThunkDispatch<CoinState, void, Action>) => {
    try {
      // Fetch all coins available on Coinbase
      var availableCoins: Set<String[]> = new Set([]);
      const coinbaseResponse = await fetch(
        'https://api.pro.coinbase.com/products'
      );
      const coinbaseResponseData = await coinbaseResponse.json();
      coinbaseResponseData.filter((coin) => coin.quote_currency === 'USD');
      coinbaseResponseData.forEach((coin) => {
        availableCoins.add(coin.base_currency);
      });

      const coinMarketCapResponse = await fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
        {
          headers: {
            'X-CMC_PRO_API_KEY': vars.apiKey,
          },
        }
      );
      const coinMarketCapResponseData = await coinMarketCapResponse.json();

      // Sort by percent change 24hrs (descending)
      coinMarketCapResponseData.data.sort((a, b) =>
        a.quote.USD.percent_change_24h < b.quote.USD.percent_change_24h ? 1 : -1
      );

      // Get top 6 movers which are available on Coinbase
      const coinData: Coin[] = [];
      for (let data of coinMarketCapResponseData.data) {
        if (availableCoins.has(data.symbol)) {
          coinData.push(
            new Coin(
              data.id,
              data.name,
              data.symbol,
              data.quote.USD.price,
              data.quote.USD.percent_change_24h
            )
          );
        }
        if (coinData.length === 6) {
          break;
        }
      }

      dispatch({
        type: SET_DATA,
        coinData: coinData,
      });
    } catch (err) {
      throw err;
    }
  };
};
