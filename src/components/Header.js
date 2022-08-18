import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

export default function Header() {
  const contextTask = useContext(TaskContext);
  const {tasks} = contextTask;
  return (
    <View>
      <Text>Terminés : {tasks.filter(task => task.completed).length}</Text>
    </View>
  );
}
