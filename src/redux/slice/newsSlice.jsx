import {createSlice} from '@reduxjs/toolkit';
import {getNews} from '../api';

const initialState = {
  loading: false,
  error: '',
  latest: [],
  tech: [],
  politics: [],
  business: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    clearError: (state, action) => {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(getNews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getNews.fulfilled, (state, action) => {
      if (action.payload.status === 'ok') {
        if (action.meta.arg.query === 'trending') {
          state.latest = action.payload.articles;
        } else if (action.meta.arg.query === 'tech') {
          state.tech = action.payload.articles;
        } else if (action.meta.arg.query === 'politics') {
          state.politics = action.payload.articles;
        } else if (action.meta.arg.query === 'business') {
          state.business = action.payload.articles;
        }
      } else {
        state.error = action.payload.message;
      }
      state.loading = false;
    });
    builder.addCase(getNews.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const {clearError} = newsSlice.actions;

export default newsSlice.reducer;
