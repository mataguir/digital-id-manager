import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';

const Link = styled.a`
  margin: 2rem 1rem 1rem auto;
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 16px;
  border: none;
  font-weight: 600;
  color: #6565bb;
  width: 100px;
  cursor: pointer;

  &:hover {
    color: #40408e;
  }

  @media (max-width: 600px) {
    position: relative;
    float: right;
    margin-bottom: 3rem;
    font-size: 14px;
    margin: 1rem 0 0 auto;
    width: 60px;
  }
`;

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return <Link onClick={handleLogout}>Logout</Link>;
};

export default Logout;
