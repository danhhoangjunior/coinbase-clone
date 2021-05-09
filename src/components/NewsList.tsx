import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NewsListItem from './NewsListItem';

import * as rssParser from 'react-native-rss-parser';

const tempData = [
  {
    id: '0',
    newsOutlet: 'Forbes',
    date: 'May 07',
    content:
      "Ether Classic Has Climbed More Than 300% In The Last Week-- Here's Why",
    image:
      'https://images.theconversation.com/files/367489/original/file-20201104-15-f61v7g.jpg?ixlib=rb-1.1.0&rect=17%2C8%2C5953%2C3965&q=45&auto=format&w=926&fit=clip',
  },
  {
    id: '1',
    newsOutlet: 'Forbes',
    date: 'May 07',
    content:
      'Citi Reportedly The Latest Bank To Consider Crypto After Soaring Client Interest',
    image:
      'https://images.theconversation.com/files/367489/original/file-20201104-15-f61v7g.jpg?ixlib=rb-1.1.0&rect=17%2C8%2C5953%2C3965&q=45&auto=format&w=926&fit=clip',
  },
  {
    id: '2',
    newsOutlet: 'Forbes',
    date: 'May 07',
    content:
      'Citi Reportedly The Latest Bank To Consider Crypto After Soaring Client Interest',
    image:
      'https://images.theconversation.com/files/367489/original/file-20201104-15-f61v7g.jpg?ixlib=rb-1.1.0&rect=17%2C8%2C5953%2C3965&q=45&auto=format&w=926&fit=clip',
  },
  {
    id: '3',
    newsOutlet: 'Forbes',
    date: 'May 07',
    content:
      'Citi Reportedly The Latest Bank To Consider Crypto After Soaring Client Interest',
    image:
      'https://images.theconversation.com/files/367489/original/file-20201104-15-f61v7g.jpg?ixlib=rb-1.1.0&rect=17%2C8%2C5953%2C3965&q=45&auto=format&w=926&fit=clip',
  },
];

const NewsList = () => {
  fetch(
    'https://news.google.com/rss/search?q=bitcoin&hl=en-CA&gl=CA&ceid=CA:en'
  )
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss);
      console.log(rss.title);
      const stuff = rss.items.filter((item) =>
        item.published.includes('08 May')
      );
      console.log(stuff.length);
      stuff.forEach((item) => console.log(item.title));
    });
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
        data={tempData}
        style={{ marginHorizontal: 8 }}
        renderItem={(itemData) => {
          return (
            <NewsListItem
              newsOutlet={itemData.item.newsOutlet}
              date={itemData.item.date}
              content={itemData.item.content}
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
