import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: rootReducer
});
