import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, Provider} from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import {tasks} from '../services/tasksService';
import {TaskContext} from '../context/TaskContext';
import {useSelector, useDispatch} from 'react-redux';
import {addTask} from '../redux/taskSlice';
export default function HomeScreen() {
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => {
    setTasksList(tasks);
  }, []);

  const handleChange = id => {
    const task = tasksList.find(item => item.id === id);
    task.completed = !task.completed;
    const taskIndex = tasksList.findIndex(item => item.id === id);
    const beforeTask = tasksList.slice(0, taskIndex);
    const endTask = tasksList.slice(taskIndex + 1);
    setTasksList([...beforeTask, task, ...endTask]);
  };
  const stateValue = useSelector(state => state.task);

  const dispatch = useDispatch();

  console.log(stateValue);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleChange,
      }}
    >
      <View>
        <Header />
        <Content />
        <Footer />
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            paddingHorizontal: 15,
            paddingVertical: 8,
          }}
          onPress={() => {
            dispatch(
              addTask({
                id: 3,
                title: 'task3',
                completed: false,
              }),
            );
          }}
        >
          <Text>Ajouter une tâche</Text>
        </TouchableOpacity>
      </View>
    </TaskContext.Provider>
  );
}
