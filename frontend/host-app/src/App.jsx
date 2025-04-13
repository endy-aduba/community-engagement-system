import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Lazy load remote apps
const AuthApp = lazy(() => import('auth_app/AuthApp'));
const CommunityApp = lazy(() => import('community_app/CommunityApp'));

const App = () => {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Auth</Link>
        <Link to="/community" style={styles.link}>Community</Link>
      </nav>

      <Suspense fallback={<div style={styles.loading}>Loading remote app...</div>}>
        <Routes>
          <Route path="/" element={<AuthApp />} />
          <Route path="/community/*" element={<CommunityApp />} />
          <Route path="*" element={<div>404 – Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

const styles = {
  nav: {
    padding: '10px',
    background: '#f5f5f5',
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  link: {
    textDecoration: 'none',
    color: '#0070f3'
  },
  loading: {
    padding: '20px',
    textAlign: 'center',
    fontStyle: 'italic'
  }
};

export default App;
