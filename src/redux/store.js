import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/slice';
import { filterSlice } from './filter/slice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [contactsSlice.name]: contactsSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
});
