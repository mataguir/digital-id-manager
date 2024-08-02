import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from './redux/authSlice';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import GitHubSearch from './components/GitHubSearch';

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchProfile());
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Routes>
      <Route path="/" element={!token ? <Home /> : <Navigate to="/profile" />} />
        <Route path="/register" element={!token ? <Register />  : <Navigate to="/profile" />} />
        <Route path="/login" element={!token ? <Login />  : <Navigate to="/profile" />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/" />} />
        <Route path="/github-search" element={token ? <GitHubSearch /> : <Navigate to="/" />} />
        <Route path="/*" element={token ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
