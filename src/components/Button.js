import {Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {useDispatch} from 'react-redux';
import {editTask} from '../redux/taskSlice';

export default function Button({completed, id}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(editTask(id))}>
      <Text>{completed ? 'completed' : 'pending'}</Text>
    </TouchableOpacity>
  );
}
