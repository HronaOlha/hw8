import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from 'services/fetchContactsAPI';

export const contactsFetch = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectedWithValue }) => {
    try {
      return await fetchContacts();
    } catch (error) {
      console.log(rejectedWithValue(error.message));
      return rejectedWithValue(error.message);
    }
  }
);

export const contactsAdd = createAsyncThunk(
  'movies/addContacts',
  async (newContact, { rejectedWithValue }) => {
    try {
      return await addContacts(newContact);
    } catch (error) {
      console.log(rejectedWithValue(error.message));
      return rejectedWithValue(error.message);
    }
  }
);

export const contactsDelete = createAsyncThunk(
  'movies/deleteContacts',
  async (id, { rejectedWithValue }) => {
    try {
      return await deleteContacts(id);
    } catch (error) {
      console.log(rejectedWithValue(error.message));
      return rejectedWithValue(error.message);
    }
  }
);
