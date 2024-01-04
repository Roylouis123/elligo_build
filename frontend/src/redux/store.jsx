import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counterSlice';

const middleware = [logger]; 

export const store = configureStore({
  reducer: {
    Docs: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware), 
});