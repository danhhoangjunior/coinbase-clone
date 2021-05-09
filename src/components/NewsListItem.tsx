import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

interface NewsListItemProps {
  newsOutlet: string;
  date: string;
  title: string;
  image: string;
}

const NewsListItem: FC<NewsListItemProps> = ({
  newsOutlet,
  date,
  title,
  image,
}) => {
  return (
    <TouchableHighlight
      style={styles.listItem}
      underlayColor='#FBFAFB'
      onPress={() => {}}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>
            {newsOutlet} <Text style={styles.bulletPoint}>•</Text> {date}
          </Text>
          <Text selectable style={styles.title}>
            {title}
          </Text>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'center',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    borderRadius: 8,
  },
  textContainer: {
    width: '75%',
  },
  header: {
    color: 'rgb(79, 85, 102)',
    fontSize: 16,
    marginBottom: 5,
  },
  bulletPoint: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 17,
    lineHeight: 25,
  },
  image: {
    width: 67,
    height: 67,
    borderRadius: 8,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
});

export default NewsListItem;
