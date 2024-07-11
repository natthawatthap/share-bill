import { configureStore } from '@reduxjs/toolkit';
import namesReducer from './features/names/namesSlice';
import itemsReducer from './features/items/itemsSlice';

const store = configureStore({
  reducer: {
    names: namesReducer,
    items: itemsReducer,
  },
});

export default store;
