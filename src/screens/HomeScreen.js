import {View, Text} from 'react-native';
import React, {useEffect, useState, Provider} from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import {tasks} from '../services/tasksService';
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
  return (
    <View>
      <Header tasks={tasks} />
      <Content tasks={tasks} handleChange={handleChange} />
      <Footer tasks={tasks} />
    </View>
  );
}
