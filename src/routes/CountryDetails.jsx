import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const CountryDetails = () => {

    const { state } = useLocation()

    // console.log(state);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/')
    }

    return (
        <div>
            <button onClick={goBack} type='button' className='flex items-center border bg-secondary border-secondary rounded-md shadow-xl px-3 py-2 m-6'><BsArrowLeft className='mr-1' /> Go Back</button>
            <div className='flex justify-center items-center mt-8 md:-mt-24'>
                <div className='md:grid grid-cols-3 grid-rows-3 justify-center space-y-10 md:space-y-0'>
                    <div className='row-start-2 col-start-1 row-end-3 col-end-2 '>
                        <img src={state.flag} alt={state.name} className="rounded-t-md max-w-xs md:max-w-md" />
                    </div>
                    <div className='row-start-2 col-start-2 row-end-3 col-end-3 mx-auto space-y-2 md:space-y-0'>
                        <h1 className="font-bold text-xl my-6 md:my-0">{state.name}</h1>
                        <h1><b>Native Name:</b> {state.nativeName}</h1>
                        <h1><b>Population:</b> {state.population.toLocaleString()}</h1>
                        <h1><b>Region:</b> {state.region}</h1>
                        <h1><b>Sub Region:</b> {state.subregion}</h1>
                    </div>
                    <div className='row-start-2 col-start-3 row-end-3 col-end-4 space-y-2 md:space-y-0'>
                        <h1><b>Top Level Domain:</b> {state.topLevelDomain}</h1>
                        <h1><b>Currencies:</b> {state?.currencies?.map((c, idx) => <span key={idx}>{(idx ? ", " : '') + c.name}</span>)}</h1>
                        <h1><b>Languages:</b> {state?.languages?.map((l, idx) => <span key={idx}>{(idx ? ", " : '') + l.name}</span>)}</h1>
                    </div>
                    <div className='row-start-3 col-start-2 row-end-3 col-end-4 mx-auto'>
                        <h1><b>Border Countries:</b> {(state.borders) ? state.borders.map((b, idx) => <span key={idx}>{(idx ? ", " : '') + b}</span>) : "No Border Countries"}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails