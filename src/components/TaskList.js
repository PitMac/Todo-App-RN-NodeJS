import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function TaskList({tasks}) {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Task', {
          id: item.id,
          title: item.title,
          description: item.description,
        })
      }
      style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );
  return <FlatList data={tasks} renderItem={renderItem} />;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'black',
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    height: 90,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
