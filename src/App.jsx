// import './App.css'
// import { useEffect, useState } from 'react';

// function App() {

//   const [search,setSearch] = useState("chennai");
//   const [city,setCity] = useState("chennai");

// const getWeatherData = async()=>{
//     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1b47dd1ff23131be62104b02a72fed67&units=metric`);
//     let result = await response.json();
// setCity(result)
    
// }
// useEffect(()=>{
//   getWeatherData();
// },[search])



//   return (
//     <div className="App">

//      <div className="weather-card">
//   <div className="search">
//     <input type="search" placeholder="enter city name" spellCheck="false" onChange={(e)=>setSearch(e.target.value)} />
//   </div>
//   <div className="weather">
//     <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
//     <h1 className="temp">{city?.main?.temp}°C </h1>
//     <h2 className="city">{city?.name}</h2>
//     <div className="details">
//       <div style={{display: 'flex'}} className="col">
//         <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" />
//         <div className="info">
//           <p className="humidity">{city?.main?.humidity}%</p>
//           <p>Humidity</p>
//         </div>
//       </div>
//       <div className="col" style={{marginLeft:"70px"}}>
//         <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" />
//         <div className="info">
//           <p className="wind">{city?.wind?.speed}km/h</p>
//           <p>Wind Speed</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   );
// }

// export default App;




import './App.css';
import { useState } from 'react';
import searchicon from './assets/search.gif'
import storm from './assets/storm.png'
import humidity from './assets/humidity.png'

function App() {
  const [search, setSearch] = useState("");  // Input text
  const [city, setCity] = useState(null); 
          // Weather data

  const getWeatherData = async () => {
    if (!search) return; // Do nothing if input is empty
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1b47dd1ff23131be62104b02a72fed67&units=metric`
      );
      let result = await response.json();
      setCity(result);
    } catch (err) {
      console.error("Failed to fetch weather data", err);
    }
  };

  return (
    <div className="App">
      <div className="weather-card" >
        <div className="search">
          <input
            type="search"
            placeholder="Enter city name"
            spellCheck="false"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
          <button onClick={getWeatherData} > <img className='imgsrch' src={searchicon} alt="searchicon" /></button>
          
          </div>
        </div>

        {city && city.main && (
          <div className="weather">
            <img
              className="weather-icon"
              src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png"
              alt="weather icon"
            />
            <h1 className="temp">{city?.main?.temp}°C</h1>
            <h2 className="city">{city?.name}</h2>
            <div className="details">
              <div className="col" style={{ display: 'flex' }}>
                <img
                  className="humi"
                  src={humidity}
                  alt="humidity"
                />
                <div className="info">
                  <p className="humidity">{city?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col" style={{ marginLeft: "70px" }}>
                <img
                  src={storm}
                  alt="wind"
                />
                <div className="info">
                  <p className="wind">{city?.wind?.speed}km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
