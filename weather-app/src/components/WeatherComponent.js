


export  function WeatherComponent({weatherData}) {
	const changeToCelcius = (k) => {
		return Math.floor((k - 273.15 ).toFixed()* 9/5 + 32);
	}
	
	return (
		<div className='weather-card' >
				<p className='name'>{weatherData?.name}</p>
				<p  style={{color: 'red',}}>{weatherData?.weather?.main}</p>
				<p className='temp'>{changeToCelcius(weatherData?.main?.temp)}&deg; </p>
			<div >
				<ul className='weather-data'>
					<li className='Hi'>Hi <br/> {changeToCelcius(weatherData?.main?.temp_max)}&deg; </li>
					<li className='Lo'>Lo <br /> {changeToCelcius(weatherData?.main?.temp_min)}&deg; </li>
					<li className='speed'>Speed <br />{weatherData?.wind?.speed}mph</li>
					<li className='humidity'>Humidity<br/>{weatherData?.main?.humidity}%</li>
				</ul>
			</div>
		</div>
	);
}
