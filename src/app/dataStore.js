import { configureStore } from '@reduxjs/toolkit';
import UserDetailsReducer from '../features/userDetaisSlice';

export const store = configureStore({
    reducer: {
        userDetails: UserDetailsReducer,
      },
})