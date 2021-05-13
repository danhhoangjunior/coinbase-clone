import React, { FC, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import NewsList from '../components/NewsList';
import * as newsActions from '../store/actions/news';
import { NewsState } from '../store/reducers/news';

interface RootState {
  news: NewsState;
}

const News: FC = () => {
  const newsData = useSelector((state: RootState) => state.news.newsData);

  return (
    <View style={styles.screen}>
      <NewsList newsData={newsData} isHomeScreen={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default News;
