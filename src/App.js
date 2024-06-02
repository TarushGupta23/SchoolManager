import "./app.css"
import Student from "./pages/Student/Student.jsx";
import { std, teacher } from "./DB_conditions.js";
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Teacher from "./pages/Teacher/Teacher.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";

function App() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher/" element={<Teacher teacher={teacher} />} />
        <Route path="/student/" element={<Student student={std}/>} />
      </Routes>
      </Router>
    );
  }

export default App;