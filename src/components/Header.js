import {View, Text} from 'react-native';
import React from 'react';

export default function Header({tasks}) {
  return (
    <View>
      <Text>Terminés : {tasks.filter(task => task.completed).length}</Text>
    </View>
  );
}
