import axios from 'axios';

// Axios instance config
const API = axios.create({ baseURL: 'http://localhost:5000/user' });

export const login = async (formData) => {
  try {
    const response = await API.post('/login', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'An error occurred');
  }
};

export const register = async (formData) => {
  try {
    const response = await API.post('/register', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'An error occurred');
  }
};

export const fetchProfile = async (token) => {
  try {
    const response = await API.get('/profile', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'An error occurred');
  }
};
