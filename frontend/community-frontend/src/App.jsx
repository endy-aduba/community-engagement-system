import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import HelpRequests from './components/HelpRequests';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/help" element={<HelpRequests />} />
      </Routes>
    </Router>
  );
};

export default App;
