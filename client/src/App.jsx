import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Principal from './components/Principal';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={<PrivateRoute />}
        >
          <Route path="/main" element={<Principal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
