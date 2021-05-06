import { AnyAction } from 'redux';
import Coin from '../../models/Coin';
import { SET_TOPMOVERS_DATA } from '../actions/topmovers';

export interface TopMoversState {
  topMoversData: Coin[];
}

const initialState: TopMoversState = {
  topMoversData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_TOPMOVERS_DATA:
      return {
        topMoversData: action.coinData,
      };
  }
  return state;
};
