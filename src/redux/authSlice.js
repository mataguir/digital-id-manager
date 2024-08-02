import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../API/index';

// Login async thunk
export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const data = await api.login(userData);
    localStorage.setItem('token', data.token); // Guardar el token en localStorage
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Register async thunk
export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await api.register(userData);
    const data = response;
    localStorage.setItem('token', data.token); // Guardar el token en localStorage
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

// Profile async thunk
export const fetchProfile = createAsyncThunk('auth/fetchProfile', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const token = state.auth.token || localStorage.getItem('token');
    const data = await api.fetchProfile(token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slices
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
