import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import GitHubSearch from '../components/GitHubSearch';
import * as api from '../API/index';

// Mock the API call
jest.mock('../API/index');

const store = configureStore({
  reducer: { auth: authReducer },
});

test('renders GitHub search form and handles search', async () => {
  api.searchGitHubUsers.mockResolvedValue([{ login: 'testuser', id: 1 }]);

  render(
    <Provider store={store}>
      <GitHubSearch />
    </Provider>
  );

  // Render form elements
  expect(screen.getByPlaceholderText('Search GitHub users')).toBeInTheDocument();

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('Search GitHub users'), { target: { value: 'testuser' } });

  // Simulate form submission
  fireEvent.click(screen.getByText('Search'));

  // Assert the API call was made
  expect(api.searchGitHubUsers).toHaveBeenCalledWith('testuser');

  // Assert search results are displayed
  expect(await screen.findByText('testuser')).toBeInTheDocument();
});
