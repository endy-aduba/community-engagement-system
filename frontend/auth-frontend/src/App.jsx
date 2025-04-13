import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Auth App Microfrontend Loaded</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
