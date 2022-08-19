import {createSlice} from '@reduxjs/toolkit';
import {ActivityIndicator} from 'react-native';
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    {
      id: 1,
      title: 'task1',
      completed: false,
    },
    {
      id: 2,
      title: 'task2',
      completed: true,
    },
  ],
  reducers: {
    editTask: (state, action) => {
      task = state.find(task => task.id === action.payload);
      task.completed = !task.completed;
    },
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {editTask, addTask} = taskSlice.actions;

export default taskSlice.reducer;
