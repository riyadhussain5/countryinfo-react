import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryInfo = () => {
    const {name} = useParams();
    const [country,setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setCountry(data))
        
    },[])
    
    return (
        <div>
            <h1>More details of the {name}</h1>
            <p>Capital : {country.capital}</p>
            <p>Demonym: {country.demonym}</p>
            <p>CallingCode : {country.callingCodes}</p>
        </div>
    );
};

export default CountryInfo;