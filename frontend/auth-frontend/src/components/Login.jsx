import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: formData });
      localStorage.setItem('token', data.login.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
