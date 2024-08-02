import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import Profile from '../components/Profile';
import * as api from '../API/index';

// Mock the API call
jest.mock('../API/index');

const store = configureStore({
  reducer: { auth: authReducer },
});

test('renders profile and displays user information', async () => {
  // Mock the fetchProfile API call
  api.fetchProfile.mockResolvedValue({ name: 'Test User', email: 'test@example.com' });

  render(
    <Provider store={store}>
      <Profile />
    </Provider>
  );

  // Assert loading state
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // Assert profile data is displayed after fetch
  await waitFor(() => {
    expect(screen.getByText('Name: Test User')).toBeInTheDocument();
    expect(screen.getByText('Email: test@example.com')).toBeInTheDocument();
  });
});
