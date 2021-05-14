import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NewsList from '../components/NewsList';
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

export const screenOptions = (navData) => {
  return {
    headerHideShadow: true,
    headerHideBackButton: true,
    headerTitleStyle: { fontWeight: '700' },
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navData.navigation.goBack();
          }}
          style={{ marginLeft: 3 }}
        >
          <Ionicons name='chevron-back-outline' size={21} />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default News;
