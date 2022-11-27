import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";


const url = 'https://restcountries.com/v2/all'

const Country = () => {

    const [country, setCountry] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);
    const [filterParam, setFilterParam] = useState(["All"])

    useEffect(() => {
        axios.get(url).then((response) => {
            setCountry(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);
    console.log(country);

    const search = (country) => {
        // eslint-disable-next-line
        return country.filter((item) => {
            // eslint-disable-next-line
            if (item.region == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    )
                })
                // eslint-disable-next-line
            } else if (filterParam == 'All') {
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

    const handleChange = (e) => {
        setQ(e.target.value)
    }

    const handleSelect = (e) => {
        setFilterParam(e.target.value)
    }




    return (
        <div>
            <div className="mt-10 ml-10 mr-10 flex justify-between">
                <label htmlFor="search-form" className="flex items-center" >
                    <BiSearch />
                    <input
                        type="search"
                        className="rounded-md"
                        placeholder="Search for a country..."
                        value={q}
                        onChange={handleChange}
                    />
                </label>
                <div>
                    <select
                        onChange={handleSelect}
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
                        <Link to={`/${item.alpha3Code}`}>
                            <div className="h-auto w-auto min-w-xs min-h-max">
                                <img src={item.flag} alt={item.name} className="rounded-t-md" />
                                <h1 className="font-bold text-xl">{item.name}</h1>
                                <h1><b>Population:</b> {item.population.toLocaleString()}</h1>
                                <h1><b>Region:</b> {item.region}</h1>
                                <h1><b>Capital</b> {item.capital}</h1>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Country