import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 50px auto;
  padding: 20px;
  h1 {
    font-size: 3rem;
		text-align: center;
  }

  nav {
    margin: 50px auto;
		display: flex;

    a {
      margin: 30px;
      padding: 12px;
      font-size: 16px;
      width: 100px;
      background-color: #6565bb;
      border: 1px solid #4747c2;
      border-radius: 10px;
      font-weight: 600;
      text-decoration: none;
      color: white;
			display: block;
    	text-align: center;
    }

    a:hover {
      background-color: #40408e;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    h1 {
      font-size: 2rem;
    }
    nav button {
      font-size: 14px;
    }
  }
`;

const Home = () => {
  return (
    <HomeComponent>
      <h1>Welcome to Digital ID Manager!</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </HomeComponent>
  );
};

export default Home;
