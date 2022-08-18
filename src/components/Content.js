import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Button from './Button';

export default function Content({tasks, handleChange}) {
  const renderItem = ({item}) => (
    <View style={styles.itemWrapper}>
      <Text>{item.title}</Text>
      <Button
        completed={item.completed}
        id={item.id}
        handleChange={handleChange}
      />
    </View>
  );
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
