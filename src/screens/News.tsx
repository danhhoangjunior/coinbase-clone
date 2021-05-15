import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

import NewsList from '../components/NewsList';
import { NewsState } from '../store/reducers/news';

interface RootState {
  news: NewsState;
}

type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'News'>;

type Props = {
  navigation: NewsScreenNavigationProp;
};

const News: FC = () => {
  const newsData = useSelector((state: RootState) => state.news.newsData);

  return (
    <View style={styles.screen}>
      <NewsList newsData={newsData} isHomeScreen={false} />
    </View>
  );
};

export const screenOptions = ({ navigation }: Props) => {
  return {
    headerHideShadow: true,
    headerHideBackButton: true,
    headerTitleStyle: { fontWeight: '700' },
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
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
