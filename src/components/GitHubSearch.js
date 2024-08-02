import React, { useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: auto;

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

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin: 1rem 0 2rem 0;
  width: 100%;

    @media (max-width: 600px) {
    margin: 2rem;
    width: 80%;
  }
`;

const Button = styled.button`
    padding: 12px;
    font-size: 16px;
    background-color: #6565bb;
    border: 1px solid #4747c2;
    border-radius: 5px;
    font-weight: 600;
    color: white;
    cursor: pointer;

  &:hover {
    background-color: #40408e;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const GitHubSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      setResults(response.data.items);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
    }
  };

  return (
    <Container>
      <Logout />
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub Repositories"
      />
      <Button onClick={handleSearch}>Search</Button>
      <List>
        {results.map((repo) => (
          <ListItem key={repo.id}>{repo.name}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default GitHubSearch;
