import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { TopMoversState } from '../reducers/topmovers';
import Coin from '../../models/Coin';
import cmpData from '../../data/CoinMarketCapData';
import cbData from '../../data/CoinbaseData';

export const SET_TOPMOVERS_DATA = 'SET_TOPMOVERS_DATA';

export const fetchTopMoversData = () => {
  return async (dispatch: ThunkDispatch<TopMoversState, void, Action>) => {
    try {
      // Get all coins available on Coinbase
      let availableCoins = new Set();

      interface CBRequiredData {
        quote_currency: string;
        base_currency: string;
      }

      cbData.filter((coin: CBRequiredData) => coin.quote_currency === 'USD');
      cbData.forEach((coin: CBRequiredData) => {
        availableCoins.add(coin.base_currency);
      });

      const coinCapResponse = await fetch(
        `https://api.coincap.io/v2/assets?limit=2000`
      );
      const coinCapResponseData = await coinCapResponse.json();

      // Sort by percent change 24hrs (descending)
      coinCapResponseData.data.sort((a: any, b: any) =>
        Math.abs(parseFloat(a.changePercent24Hr)) <
        Math.abs(parseFloat(b.changePercent24Hr))
          ? 1
          : -1
      );

      // Get a maximum of 6 top movers which are available on Coinbase
      const coinData: Coin[] = [];
      for (let data of coinCapResponseData.data) {
        if (
          availableCoins.has(data.symbol) &&
          data.priceUsd !== null &&
          data.changePercent24Hr != null
        ) {
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
