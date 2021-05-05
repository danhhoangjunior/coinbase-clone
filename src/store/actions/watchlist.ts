import vars from '../../env';
import Coin from '../../models/Coin';
import dummy from './DUMMY';

export const SET_DATA = 'SET_DATA';

export const fetchCoinData = () => {
  return async (dispatch, getState) => {
    const coins = ['BTC', 'ETH', 'EOS', 'BCH', 'DOGE', 'XRP', 'USDT'];

    try {
      // const response = await fetch(
      //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      //   {
      //     headers: {
      //       'X-CMC_PRO_API_KEY': vars.apiKey,
      //     },
      //   }
      // );
      const resData = dummy;
      // const resData = await response.json();
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

export const updateCoinData = (newData) => {
  return async (dispatch) => {
    dispatch({
      type: SET_DATA,
      coinData: newData,
    });
  };
};
