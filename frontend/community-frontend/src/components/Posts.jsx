import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_POSTS = gql`
  query {
    getPosts {
      id
      title
      content
      category
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($author: ID!, $title: String!, $content: String!, $category: String!) {
    createPost(author: $author, title: $title, content: $content, category: $category) {
      id
      title
    }
  }
`;

const Posts = () => {
  const { data, refetch } = useQuery(GET_POSTS);
  const [createPost] = useMutation(CREATE_POST);
  const [form, setForm] = useState({ author: '', title: '', content: '', category: 'news' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ variables: form });
    setForm({ author: '', title: '', content: '', category: 'news' });
    refetch();
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="author" placeholder="User ID" value={form.author} onChange={handleChange} />
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="news">News</option>
          <option value="discussion">Discussion</option>
        </select>
        <button type="submit">Post</button>
      </form>

      <h3>All Posts</h3>
      {data?.getPosts?.map((post) => (
        <div key={post.id}>
          <h4>{post.title} ({post.category})</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
