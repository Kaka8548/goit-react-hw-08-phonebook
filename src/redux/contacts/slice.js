import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    // fetch contacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: handleRejected,

    // add contact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected]: handleRejected,

    // delete contact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});
