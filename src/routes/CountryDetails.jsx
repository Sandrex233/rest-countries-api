import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CountryDetails = () => {

    const { state } = useLocation()

    console.log(state);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/')
    }

    return (
        <div>
            contry details

            <button onClick={goBack} className='bg-white'>Go Back</button>

            <div>
                <img src={state.flag} alt={state.name} className="rounded-t-md" />
                <h1 className="font-bold text-xl">{state.name}</h1>
                <h1><b>Native Name:</b> {state.nativeName}</h1>
                <h1><b>Population:</b> {state.population.toLocaleString()}</h1>
                <h1><b>Region:</b> {state.region}</h1>
                <h1><b>Sub Region:</b> {state.subregion}</h1>
                <h1><b>Top Level Domain:</b> {state.topLevelDomain}</h1>
                <h1><b>Currencies:</b> {state.currencies.map((c, idx) => <span key={idx}>{(idx ? ", " : '') + c.name}</span>)}</h1>
                <h1><b>Languages:</b> {state.languages.map((l, idx) => <span key={idx}>{(idx ? ", " : '') + l.name}</span>)}</h1>
            </div>
            <div>
                <h1><b>Border Countries:</b> {(state.borders) ? state.borders.map((b, idx) => <span key={idx}>{(idx ? ", " : '') + b}</span>) : "No Border Countries"}</h1>
            </div>
        </div>
    )
}

export default CountryDetails