import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_HELP_REQUESTS = gql`
  query {
    getHelpRequests {
      id
      description
      location
      isResolved
      volunteers
    }
  }
`;

const CREATE_HELP = gql`
  mutation CreateHelpRequest($author: ID!, $description: String!, $location: String) {
    createHelpRequest(author: $author, description: $description, location: $location) {
      id
    }
  }
`;

const MARK_RESOLVED = gql`
  mutation MarkResolved($id: ID!) {
    markHelpResolved(id: $id) {
      id
      isResolved
    }
  }
`;

const HelpRequests = () => {
  const { data, refetch } = useQuery(GET_HELP_REQUESTS);
  const [createHelpRequest] = useMutation(CREATE_HELP);
  const [markResolved] = useMutation(MARK_RESOLVED);
  const [form, setForm] = useState({ author: '', description: '', location: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createHelpRequest({ variables: form });
    refetch();
    setForm({ author: '', description: '', location: '' });
  };

  return (
    <div>
      <h2>Create Help Request</h2>
      <form onSubmit={handleSubmit}>
        <input name="author" placeholder="User ID" value={form.author} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <h3>All Help Requests</h3>
      {data?.getHelpRequests?.map((req) => (
        <div key={req.id}>
          <p>{req.description} ({req.location})</p>
          <p>Status: {req.isResolved ? 'Resolved' : 'Open'}</p>
          {!req.isResolved && (
            <button onClick={() => { markResolved({ variables: { id: req.id } }); refetch(); }}>
              Mark as Resolved
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default HelpRequests;
