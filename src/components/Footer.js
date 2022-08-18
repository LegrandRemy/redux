import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

export default function Footer() {
  const contextTask = useContext(TaskContext);
  const {tasks} = contextTask;
  return (
    <View>
      <Text>Total : {tasks.length}</Text>
    </View>
  );
}
