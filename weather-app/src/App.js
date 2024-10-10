
import { useState, useEffect } from 'react'
import { WeatherComponent } from './components/WeatherComponent'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



export default function MyApp() {
 
  const [apiData, setApiData] = useState('');
  const [getCity, setGetCity] = useState('');
  const [city, setCity] = useState('');

  const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8bd1d08aa24f089a65f8c6f4b056564`

  useEffect(() => {
    //Weather function called to fetch weather data of city searched.

    const weather = async () => {
      try {
        const res = await fetch(apiKey)
        const data = await res.json()
        setApiData(data);
      } catch(err) {
        return err;
      }
    }
    //Weather function commented out will continuously call function will use alloted calls to API.

    // weather();
  }, [apiData])



  const submitBtn = () => {
    setCity(getCity);
  };
  return (
    <div className='App'>
      <br />
      <label className='search-tab' >
        <input
          className='search'
          type='text'
          value={getCity}
          onChange={e => setGetCity(e.target.value)}
          placeholder='Search City...'
        />
      </label><FontAwesomeIcon className='addCity'
        onClick={submitBtn} icon={faSearch} />
      <br />
      <WeatherComponent weatherData={apiData} />
      <br />
    </div>
  );
}