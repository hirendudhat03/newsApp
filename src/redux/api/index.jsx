import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseURL} from './apiConst';

export const getNews = createAsyncThunk(
  'news',
  async ({query}, {rejectWithValue}) => {
    try {
      const request = await fetch(`${baseURL}&q=${query}`, {
        method: 'GET',
      });
      const response = await request.json();
      return response;
    } catch (err) {
      console.log('Throw Error ::', err);
      return rejectWithValue('Network Request Failed');
    }
  },
);
