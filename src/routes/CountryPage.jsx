import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CountryPage = () => {
    const [country, setCountry] = useState([]);

    const url = 'https://restcountries.com/v3.1/all'

    useEffect(() => {
        axios.get(url).then((response) => {
            setCountry(response.data);
            // console.log(response.data)
        });
    }, [url]);



    return (
        <div>CountryPage</div>
    )
}

export default CountryPage