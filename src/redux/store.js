import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/root';

export const store = configureStore({
  reducer: rootReducer,
});
