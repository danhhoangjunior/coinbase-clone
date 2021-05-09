import { AnyAction } from 'redux';
import News from '../../models/News';
import { SET_NEWS_DATA } from '../actions/news';

export interface NewsState {
  newsData: News[];
}

const initialState: NewsState = {
  newsData: [],
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_NEWS_DATA:
      return {
        newsData: action.newsData,
      };
  }
  return state;
};
