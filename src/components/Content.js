import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useContext} from 'react';
import CustomButton from './Button';
// import {TaskContext} from '../context/TaskContext';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';

export default function Content() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  // const contextTask = useContext(TaskContext);
  // const {tasks} = contextTask;
  const renderItem = ({item}) => (
    <View style={styles.itemWrapper}>
      <Text>{item.title}</Text>
      <CustomButton completed={item.completed} id={item.id} />
      <Button
        title="Delete"
        onPress={() => {
          dispatch(deleteTask(item.id));
        }}
      />
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
