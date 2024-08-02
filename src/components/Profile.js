import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/authSlice";
import Logout from "./Logout";
import {  Link } from "react-router-dom";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 300px;
  margin: auto;

  p {
    font-weight: 500;
  }

  a {
    padding: 12px;
    font-size: 16px;
    background-color: #6565bb;
    border: 1px solid #4747c2;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    margin-top: 2rem;
  }
  a:hover {
    background-color: #40408e;
  }

  @media (max-width: 600px) {
    border: none;
    box-shadow: none;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const ErrorMsg =  styled.p`
  color: red;
  margin: 2rem auto;
}
`;

const Profile = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  return (
    user && (
      <>
        <Logout />
        <ProfileContainer>
          <h1>Profile</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <Link to="/github-search">GitHub Search</Link>
        </ProfileContainer>
      </>
    )
  );
};

export default Profile;
