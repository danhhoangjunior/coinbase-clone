import { AnyAction } from 'redux';
import Coin from '../../models/Coin';
import { SET_WATCHLIST_DATA } from '../actions/watchlist';

export interface WatchlistState {
  watchlistData: Coin[];
}

const initialState: WatchlistState = {
  watchlistData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_WATCHLIST_DATA:
      return {
        watchlistData: action.coinData,
      };
  }
  return state;
};
