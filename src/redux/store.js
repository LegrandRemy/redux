import {configureStore} from '@reduxjs/toolkit';
import taskSlice from './taskSlice';
//Store = magasin qui contient toutes les données qui contient des slices et qui est exporté et importé dans App
export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});
