import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { WatchlistState } from '../reducers/watchlist';
import Coin from '../../models/Coin';
import cmpData from './CoinMarketCapData';

export const SET_WATCHLIST_DATA = 'SET_WATCHLIST_DATA';

export const fetchCoinData = () => {
  return async (dispatch: ThunkDispatch<WatchlistState, void, Action>) => {
    const coins = ['ETC', 'EOS', 'XTZ', 'SUSHI', 'BTC', 'XLM'];

    try {
      const response = await fetch(`https://api.coincap.io/v2/assets`);
      const resData = await response.json();

      const coinData: Coin[] = [];
      coins.forEach((coin) => {
        const data = resData.data.find((val: Coin) => val.symbol === coin);
        console.log(data);
        coinData.push(
          new Coin(
            cmpData.data.find((coin) => data.symbol === coin.symbol).id,
            data.name,
            data.symbol,
            data.priceUsd,
            data.changePercent24Hr
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
