import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import NewsListItem from './NewsListItem';
import News from '../models/News';

interface NewsProps {
  newsData: News[];
}

const NewsList: FC<NewsProps> = ({ newsData }) => {
  return (
    <View
      style={{
        width: '100%',
        alignSelf: 'flex-start',
      }}
    >
      <View style={styles.listHeader}>
        <Text style={styles.newsText}>News</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text selectable style={styles.viewMoreButton}>
            View more
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        scrollEnabled={false}
        data={newsData}
        style={{ marginHorizontal: 8 }}
        renderItem={(itemData) => {
          return (
            <NewsListItem
              newsOutlet={itemData.item.newsOutlet}
              date={itemData.item.date}
              title={itemData.item.title}
              image={itemData.item.image}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 10,
    marginHorizontal: '6%',
  },
  newsText: {
    fontSize: 21,
    fontWeight: '600',
  },
  viewMoreButton: {
    color: 'rgb(0, 82, 248)',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default NewsList;
