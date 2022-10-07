import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import CountryPage from './routes/CountryPage';
import axios from "axios";


function App() {

  const [countrys, setCountrys] = useState([]);

  const url = 'https://restcountries.com/v3.1/all'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountrys(response.data);
      console.log(response.data)
    });
  }, [url]);

  return (
    <ThemeProvider>
      <div className="font-nurito">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:countryId' element={<CountryPage />}>
            <Route path=':countryId' />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
