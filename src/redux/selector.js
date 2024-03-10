import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter.value;

export const getAvailableContacts = createSelector(
  [getContacts, getFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  }
);