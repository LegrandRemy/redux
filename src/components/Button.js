import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({completed, id, handleChange}) {
  return (
    <TouchableOpacity onPress={() => handleChange(id)}>
      <Text>{completed ? 'completed' : 'pending'}</Text>
    </TouchableOpacity>
  );
}
