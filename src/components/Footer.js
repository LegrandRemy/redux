import { View, Text } from 'react-native'
import React from 'react'

export default function Footer({tasks}) {
  return (
    <View>
      <Text>Total : {tasks.length}</Text>
    </View>
  );
}