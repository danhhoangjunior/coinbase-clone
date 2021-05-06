import { AnyAction } from 'redux';
import Coin from '../../models/Coin';
import { SET_DATA } from '../actions/topmovers';

export interface CoinState {
  topMoversData: Coin[];
}

const initialState: CoinState = {
  topMoversData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_DATA:
      return {
        topMoversData: action.coinData,
      };
  }
  return state;
};
