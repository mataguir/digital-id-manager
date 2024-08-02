import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authSlice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 2rem 0 3rem 0;
  }

  button {
    padding: 12px;
    font-size: 16px;
    background-color: #6565bb;
    border: 1px solid #4747c2;
    border-radius: 5px;
    font-weight: 600;
    color: white;
  }
  button:hover {
    background-color: #40408e;
  }

  input,
  button {
    margin: 1rem 0;
    padding: 10px;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    border: none;
    box-shadow: none;
    width: 100%;
    margin: 0;
    padding: 0;
    input,
    label,
    button,
    h1 {
      margin-right: 2rem;
      margin-left: 2rem;
    }
  }
`;

const ErrorMsg =  styled.p`
  color: red;
  margin: 2rem auto;
}
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, token, error } = useSelector((state) => state.auth);
  const [localError, setLocalError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (token) {
      navigate('/profile');
    }
  }, [token, navigate]);

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validations
    if (!emailRegex.test(email)) {
      setLocalError("Invalid email format");
      return;
    }
    if (!passwordRegex.test(password)) {
      setLocalError("Password does not meet security requirements");
      return;
    }

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then((response) => {
        console.log(response);
        
        navigate("/profile")
      })
      .catch(() => setLocalError("Invalid credentials"));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>Email:</label>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <label>Password:</label>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      {loading && <p>Loading...</p>}
      {localError && <ErrorMsg>{localError}</ErrorMsg>}
    </Form>
  );
};

export default Login;
