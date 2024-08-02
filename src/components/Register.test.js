import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import Register from '../components/Register';

const store = configureStore({
  reducer: { auth: authReducer },
});

test('renders register form and handles submit', async () => {
  render(
    <Provider store={store}>
      <Register />
    </Provider>
  );

  // Render form elements
  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Test User' } });
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'Password123!' } });

  // Simulate form submission
  fireEvent.click(screen.getByText('Register'));

  // Add your assertions for successful registration or error messages
});
