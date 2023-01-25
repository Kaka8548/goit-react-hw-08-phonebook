import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selector';

export const selectContact = state => state.contacts.items;
export const selectLoader = state => state.contacts.isLoading;

export const selectFilteredList = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
