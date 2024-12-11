import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';


// Initial state
const initialState = {
  token: Cookies.get('loginToken') || null,
  user: null,
  loading: false,
  error: null,
};

// Async thunk to fetch user details if the token is available in cookies
export const fetchUserDetails = createAsyncThunk(
  'userDetails/fetchUserDetails', 
  async (token, { rejectWithValue }) => {
    try {
      
      const response = await axios.get('http://122.166.86.165/Auth/api/auth/details', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // assuming API returns user data
    } catch (error) {
      return rejectWithValue(error.response.data); // return error response
    }
  }
);

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setuserDetails: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      Cookies.remove('loginToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Set the fetched user data
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setuserDetails, logout } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
