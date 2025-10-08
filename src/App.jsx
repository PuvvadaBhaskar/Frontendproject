import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginPage from "./Homepage/LoginPage";
import SignupPage from "./Homepage/SignupPage";
import Home from './Homepage/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;