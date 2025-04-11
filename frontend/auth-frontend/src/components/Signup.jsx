import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const SIGNUP = gql`
  mutation Signup($username: String!, $email: String!, $password: String!, $role: String!) {
    signup(username: $username, email: $email, password: $password, role: $role) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: 'resident' });
  const [signup] = useMutation(SIGNUP);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup({ variables: formData });
      localStorage.setItem('token', data.signup.token);
      alert("Signup successful!");
    } catch (error) {
      alert("Signup error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <select name="role" onChange={handleChange}>
        <option value="resident">Resident</option>
        <option value="business_owner">Business Owner</option>
        <option value="community_organizer">Community Organizer</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
