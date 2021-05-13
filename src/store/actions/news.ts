import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../reducers/news';

import News from '../../models/News';

export const SET_NEWS_DATA = 'SET_NEWS_DATA';

export const fetchNewsData = () => {
  return async (dispatch: ThunkDispatch<NewsState, void, Action>) => {
    try {
      // Fetch news from cryptocompare API
      const response = await fetch(
        'https://min-api.cryptocompare.com/data/v2/news/?lang=EN'
      );
      const responseData = await response.json();

      // Get the five latest news articles
      let newsData: News[] = [];
      for (const news of responseData.Data) {
        const formattedDate = new Date(news.published_on * 1000)
          .toString()
          .split(' ')
          .splice(1, 2)
          .join(' ');

        newsData.push(
          new News(
            news.source_info.name,
            formattedDate,
            news.title,
            news.imageurl,
            news.url
          )
        );
        if (newsData.length === 20) {
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
