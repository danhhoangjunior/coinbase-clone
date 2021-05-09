import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../reducers/news';
import News from '../../models/News';

export const SET_NEWS_DATA = 'SET_NEWS_DATA';

export const fetchNewsData = () => {
  return async (dispatch: ThunkDispatch<NewsState, void, Action>) => {
    try {
      let newsData: News[] = [];

      dispatch({
        type: SET_NEWS_DATA,
        coinData: newsData,
      });
    } catch (err) {
      throw err;
    }
  };
};
