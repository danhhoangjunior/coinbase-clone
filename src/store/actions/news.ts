import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../reducers/news';
import * as rssParser from 'react-native-rss-parser';

import News from '../../models/News';

export const SET_NEWS_DATA = 'SET_NEWS_DATA';

export const fetchNewsData = () => {
  return async (dispatch: ThunkDispatch<NewsState, void, Action>) => {
    try {
      const response = await fetch(
        'https://min-api.cryptocompare.com/data/v2/news/?lang=EN'
      );
      const responseData = await response.json();

      let newsData: News[] = [];

      for (let news of responseData.Data) {
        newsData.push(
          new News(
            news.source_info.name,
            new Date(news.published_on * 1000)
              .toString()
              .split(' ')
              .splice(1, 2)
              .join(' ')
              .toString(),
            news.title,
            news.imageurl,
            news.url
          )
        );
        if (newsData.length === 5) {
          break;
        }
      }

      dispatch({
        type: SET_NEWS_DATA,
        newsData: newsData,
      });
    } catch (err) {
      throw err;
    }
  };
};
