import {createSlice} from '@reduxjs/toolkit';
import {ActivityIndicator} from 'react-native';
//create slice qui vient de react toolkit
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
  // methode qui sont appelé pour interagir avec nos états (state et actions)
  reducers: {
    //changer l'etat d'une tache
    editTask: (state, action) => {
      task = state.find(task => task.id === action.payload);
      task.completed = !task.completed;
    },
    //ajouter une tache avec add
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      state = state.filter(task => task.id !== action.payload);
      return state;
    },
  },
});
//exporter pour reutiliser les actions
export const {editTask, addTask, deleteTask} = taskSlice.actions;
//exporter pour utiliser dans store
export default taskSlice.reducer;
