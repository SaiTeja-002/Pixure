import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import './App.css';

const App = () => {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Router>
  );
}

export default App;
