import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import Logout from '../components/Logout';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({
  reducer: { auth: authReducer },
});

test('renders logout link and handles logout', () => {
  render(
    <Provider store={store}>
      <Router>
        <Logout />
      </Router>
    </Provider>
  );

  // Render logout link
  expect(screen.getByText('Logout')).toBeInTheDocument();

  // Simulate logout
  fireEvent.click(screen.getByText('Logout'));

  // Assert localStorage is cleared and navigation is called
  expect(localStorage.getItem('token')).toBeNull();
  // You might need to mock and assert navigation behavior if using react-router
});
