import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../reducers/news';
import * as rssParser from 'react-native-rss-parser';

import News from '../../models/News';

export const SET_NEWS_DATA = 'SET_NEWS_DATA';

export const fetchNewsData = () => {
  return async (dispatch: ThunkDispatch<NewsState, void, Action>) => {
    try {
      let todaysNews = [];

      const response = await fetch(
        'https://news.google.com/rss/search?q=bitcoin&hl=en-CA&gl=CA&ceid=CA:en'
      );
      const responseText = await response.text();
      const rss = await rssParser.parse(responseText);

      const today = new Date()
        .toString()
        .split(' ')
        .splice(1, 2)
        .reverse()
        .join(' ');
      todaysNews = rss.items.filter((item: any) =>
        item.published.includes(today)
      );

      let newsData: News[] = [];

      for (let item of todaysNews) {
        console.log(item);
        const res = await fetch(
          `https://www.google.ca/search?tbm=isch&q=${item.title}`
        );
        const html = await res.text();
        const matches = html.match(/\bhttps?:\/\/encrypted[^;]*/gi);

        newsData.push(
          new News(
            item.title.match(/^[^-\r\n]+-\s*\K.*$/gi)[0] ?? 'Forbes',
            item.published.split(' ').splice(1, 2).reverse().toString(),
            item.title,
            matches ? matches[0] : '',
            item.links[0].url
          )
        );
      }

      console.log(newsData);

      dispatch({
        type: SET_NEWS_DATA,
        newsData: newsData,
      });
    } catch (err) {
      throw err;
    }
  };
};
