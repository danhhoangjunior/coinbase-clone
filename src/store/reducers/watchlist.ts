import Coin from '../../models/Coin';
import { SET_DATA } from '../actions/watchlist';

const initialState = {
  coinData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        coinData: action.coinData,
      };
  }
  return state;
};
