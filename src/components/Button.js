import {Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

export default function Button({completed, id}) {
  const taskContext = useContext(TaskContext);
  const {handleChange} = taskContext;
  return (
    <TouchableOpacity onPress={() => handleChange(id)}>
      <Text>{completed ? 'completed' : 'pending'}</Text>
    </TouchableOpacity>
  );
}
