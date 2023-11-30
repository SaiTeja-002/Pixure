import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';
import UpdateProfilePage from './pages/UpdateProfilePage';
import AddPost from './pages/AddPostPage';
import StaggeredLayout from './pages/StaggeredLayout';

const App = () => {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px"
    },
  };

  return (
    // <LoginPage />
    // <HomePage />
    // <MyWrapper />
    // <ThemeProvider theme={theme}>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/updateprofile" element={<UpdateProfilePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Router>
    // </ThemeProvider>
  );
}

export default App;
