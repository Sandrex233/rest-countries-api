import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header';
import axios from "axios";



import { Link, Route, Routes } from 'react-router-dom'
import Country from "./routes/Country";



const url = 'https://restcountries.com/v3.1/all'

function App() {

  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountry(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  console.log(country)


  if (!country) return null

  return (
    <ThemeProvider>
      <div className="font-nurito">
        <Header />
        <Routes>
          <Route path="/country/:name" element={<Country country={country} />} />
        </Routes>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mx-auto px-10 py-10 space-x-4 gap-x-6 gap-y-24">
          {country.map((item, id) =>
            <div key={id}>
              <Link to={"country/" + item.name.common}>
                <div className="h-auto w-auto min-w-xs min-h-max">
                  <img src={item.flags.svg} alt={item.name.common} className="rounded-t-md" />
                  <h1 className="font-bold text-xl">{item.name.common}</h1>
                  <h1><b>Population:</b> {item.population.toLocaleString()}</h1>
                  <h1><b>Region:</b> {item.region}</h1>
                  <h1><b>Capital</b> {item.capital}</h1>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
