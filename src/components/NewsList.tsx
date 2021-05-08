import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NewsList = () => {
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
          <Text style={styles.viewMoreButton}>View more</Text>
        </TouchableOpacity>
      </View>
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
