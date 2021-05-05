import { AnyAction } from 'redux';
import Coin from '../../models/Coin';
import { SET_DATA } from '../actions/watchlist';

export interface CoinState {
  coinData: Coin[];
}

const initialState: CoinState = {
  coinData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_DATA:
      return {
        coinData: action.coinData,
      };
  }
  return state;
};
