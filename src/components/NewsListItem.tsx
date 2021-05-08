import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

const NewsListItem = (props) => {
  return (
    <TouchableHighlight
      style={styles.listItem}
      underlayColor='#FBFAFB'
      onPress={() => {}}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>
            {props.outlet} <Text style={styles.bulletPoint}>•</Text>{' '}
            {props.date}
          </Text>
          <Text selectable style={styles.content}>
            {props.content}
          </Text>
        </View>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 130,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    borderRadius: 8,
  },
  textContainer: {
    width: '70%',
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
  content: {
    fontSize: 17,
    lineHeight: 25,
  },
  image: {
    width: 67,
    height: 67,
    borderRadius: 8,
    alignSelf: 'center',
  },
});

export default NewsListItem;
