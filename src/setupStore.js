import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainReducer';

export const setupStore = () => configureStore({ reducer: mainReducer });
