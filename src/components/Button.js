import {Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
import {useDispatch} from 'react-redux';
import {editTask} from '../redux/taskSlice';

export default function Button({completed, id}) {
  const taskContext = useContext(TaskContext);
  const dispatch = useDispatch();
  const {handleChange} = taskContext;
  return (
    <TouchableOpacity onPress={() => dispatch(editTask(id))}>
      <Text>{completed ? 'completed' : 'pending'}</Text>
    </TouchableOpacity>
  );
}
