import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { WatchlistState } from '../reducers/watchlist';
import Coin from '../../models/Coin';
import cmpData from '../../data/CoinMarketCapData';

export const SET_WATCHLIST_DATA = 'SET_WATCHLIST_DATA';

export const fetchCoinData = () => {
  return async (dispatch: ThunkDispatch<WatchlistState, void, Action>) => {
    // Will change when user can favorite coins
    const coins = ['BTC', 'XRP', 'BCH', 'ETH', 'DOGE', 'LTC'];

    try {
      const response = await fetch(`https://api.coincap.io/v2/assets`);
      const resData = await response.json();

      const coinData: Coin[] = [];
      coins.forEach((coin) => {
        const data = resData.data.find((val: Coin) => val.symbol === coin);
        // Find ID from CMP data, if it doesn't exist use 1
        const coinID =
          cmpData.data.find((coin) => data.symbol === coin.symbol)?.id ?? 1;
        coinData.push(
          new Coin(
            coinID,
            data.name,
            data.symbol,
            parseFloat(data.priceUsd),
            parseFloat(data.changePercent24Hr)
          )
        );
      });

      dispatch({
        type: SET_WATCHLIST_DATA,
        coinData: coinData,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const updateCoinData = (newData: Coin[]) => {
  return async (dispatch: ThunkDispatch<WatchlistState, void, Action>) => {
    dispatch({
      type: SET_WATCHLIST_DATA,
      coinData: newData,
    });
  };
};
