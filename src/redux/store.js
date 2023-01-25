import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/slice';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    [contactsSlice.name]: contactsSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
});
