import {View, Text} from 'react-native';
import React, {useContext} from 'react';
// import {TaskContext} from '../context/TaskContext';
import {useSelector} from 'react-redux';

export default function Header() {
  const tasks = useSelector(state => state.tasks);
  // const contextTask = useContext(TaskContext);
  // const {tasks} = contextTask;
  return (
    <View>
      <Text>Terminés : {tasks.filter(task => task.completed).length}</Text>
    </View>
  );
}
