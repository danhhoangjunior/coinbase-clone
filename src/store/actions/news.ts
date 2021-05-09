import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { NewsState } from '../reducers/news';
import * as rssParser from 'react-native-rss-parser';
import DOMParser from 'react-native-html-parser';

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

      //todaysNews.forEach((item: any) => {
      fetch(
        `https://www.google.ca/search?tbm=isch&q=${todaysNews[0].title}`
      ).then((response) => {
        console.log(response);
        // const html = response.text();
        // const parser = new DOMParser.DOMParser();
        // const parsed = parser.parseFromString(html, 'text/html');
        // console.log(parsed.getElementsByAttribute('class', 'b'));
      });

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
