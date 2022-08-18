import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Button from './Button';
import {TaskContext} from '../context/TaskContext';

export default function Content() {
  const contextTask = useContext(TaskContext);
  const {tasks} = contextTask;
  const renderItem = ({item}) => (
    <View style={styles.itemWrapper}>
      <Text>{item.title}</Text>
      <Button completed={item.completed} id={item.id} />
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
