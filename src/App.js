import "./app.css"
import Student from "./pages/Student/Student.jsx";
import { std, teacher } from "./DB_conditions.js";
import React, { useState, useEffect } from 'react';
import Teacher from "./pages/Teacher/Teacher.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";
import School from "./pages/school/School.jsx";

function App() {
    var currUser = null;
    const setUser = (user) => {
      currUser = user;
      alert(currUser)
    }
    return (
      <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />}/>
        <Route path="/teacher/" element={<Teacher teacher={teacher} />} />
        <Route path="/student/" element={<Student student={std}/>} />
        <Route path="/school/" element={<School/>} />
      </Routes>
      </Router>
    );
  }

export default App;