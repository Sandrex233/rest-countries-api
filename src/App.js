import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import CountryPage from './routes/CountryPage';

function App() {

  return (
    <ThemeProvider>
      <div className="font-nurito">
        <Navbar />
        <h1>rest capi</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
