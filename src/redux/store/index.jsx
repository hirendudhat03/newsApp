import {combineReducers, configureStore} from '@reduxjs/toolkit';
import newsSlice from '../slice/newsSlice';

const rootReducer = combineReducers({
  newsReducer: newsSlice, // add other reducers if you have
});

export const store = configureStore({
  reducer: rootReducer,
  // You can configure middleware, enhancers, etc. here
});

export default store;
