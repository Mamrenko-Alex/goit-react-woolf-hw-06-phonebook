import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});
    
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: { id: nanoid(), ...newContact },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;