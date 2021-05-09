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
      let availableCoins: string[] = [];

      interface CBRequiredData {
        quote_currency: string;
        base_currency: string;
      }

      const filteredData = cbData.filter(
        (coin: CBRequiredData) => coin.quote_currency === 'USD'
      );

      filteredData.forEach((coin: CBRequiredData) => {
        availableCoins.push(coin.base_currency);
      });

      const cryptoResponse = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&e=Coinbase&relaxedValidation=true&fsyms=${availableCoins.join()}`
      );
      const cryptoResponseData = await cryptoResponse.json();

      let dataAsArray = Object.values(cryptoResponseData.RAW);

      // Sort by percent change 24hrs (descending)
      dataAsArray.sort((a: any, b: any) => {
        return Math.abs(a.USD.CHANGEPCT24HOUR) < Math.abs(b.USD.CHANGEPCT24HOUR)
          ? 1
          : -1;
      });

      // Get a maximum of 6 top movers which are available on Coinbase
      const coinData: Coin[] = [];
      for (let data of dataAsArray) {
        const coinName =
          cmpData.data.find((cmpCoin) => data.USD.FROMSYMBOL === cmpCoin.symbol)
            ?.name ?? 'Unknown';
        coinData.push(
          new Coin(
            data.USD.IMAGEURL,
            coinName,
            data.USD.FROMSYMBOL,
            data.USD.PRICE,
            data.USD.CHANGEPCT24HOUR
          )
        );
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
