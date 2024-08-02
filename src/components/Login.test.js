import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import Login from '../components/Login';

const store = configureStore({
  reducer: { auth: authReducer },
});

test('renders login form and handles submit', async () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  // Render form elements
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Password123!' } });

  // Simulate form submission
  fireEvent.click(screen.getByText('Login'));

  // Add your assertions for successful login or error messages
});
