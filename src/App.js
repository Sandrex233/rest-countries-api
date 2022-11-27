import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from './components/Header';
import axios from "axios";
import { BiSearch } from 'react-icons/bi'


const url = 'https://restcountries.com/v2/all'

function App() {

  const [country, setCountry] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountry(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  console.log(country);

  if (!country) return null

  function search(country) {
    // eslint-disable-next-line
    return country.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          )
        })
      } else if (filterParam === 'All') {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          )
        })
      }
    })
  }


  return (
    <ThemeProvider>
      <div className="font-nurito">
        <Header />
        <div className="mt-10 ml-10 mr-10 flex justify-between">
          <label htmlFor="search-form" className="flex items-center" >
            <BiSearch />
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="rounded-md"
              placeholder="Search for a country..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </label>
          <div>
            <select
              onChange={(e) => {
                setFilterParam(e.target.value)
              }}
              aria-label="Filter Countries By Countries"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mx-auto px-10 py-10 space-x-4 gap-x-6 gap-y-24">
          {search(country).map((item, id) =>
            <div key={id}>
              <div className="h-auto w-auto min-w-xs min-h-max">
                <img src={item.flag} alt={item.name} className="rounded-t-md" />
                <h1 className="font-bold text-xl">{item.name}</h1>
                <h1><b>Population:</b> {item.population.toLocaleString()}</h1>
                <h1><b>Region:</b> {item.region}</h1>
                <h1><b>Capital</b> {item.capital}</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
