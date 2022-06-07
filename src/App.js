import React, { useState, useEffect } from 'react';

function Weather(props) {
  let lat = props.latitude;
  let long = props.longitude;

  const api = "83a2e87431c3d4b04649c1d7def415c8"

  const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

  return (
    <WeatherTable
      base={base}
    />
  )
}

function WeatherTable(props) {
  const url = props.base;
  const [place, setPlace] = useState("");
  const [icons, setIcons] = useState("");
  const [desc, setDesc] = useState("");
  const [celsius,setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [sunrises, setSunrise] = useState(0);
  const [sunsets, setSunset] = useState(0);

  useEffect(() => {
    fetch(url).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      //place
      setPlace(data.name)
      //icon
      let { description, icon } = data.weather[0];
      let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      setDesc(description);
      setIcons(iconURL);
      // tempeature
      let { temp } = data.main;
      let cel = temp.toFixed(2);
      let f = (temp*9) / 5 + 32;
      setCelsius(cel);
      setFahrenheit(f);
      //sunrise and sunset
      let {sunrise, sunset } = data.sys;
      let sunriseGMT = new Date(sunrise*1000).toLocaleTimeString();
      let sunsetGMT = new Date(sunset*1000).toLocaleTimeString();
      setSunrise(sunriseGMT);
      setSunset(sunsetGMT);
    })
  },[])

  return (
    <div className='weather_data'>
      <h1>{place}</h1>
      <img src={icons} alt="icon"></img>
      <h2>{desc}</h2>
      <p>Temperature(°C): {celsius}°C</p>
      <p>Temperature(°F): {fahrenheit}°F</p>
      <p>Sunrise: {sunrises}</p><p>Sunset: {sunsets}</p>
    </div>
  )
}

function App(props) {

  //const [latitude,setLatitude] = useState(0);
  //const [longitude,setLongitude] = useState(0)

  /*

  useEffect(() => {

    let lat,long;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        setLatitude(lat);
        setLongitude(long);
      })
    }
  },[])

  */

  return ( 
      <Weather latitude={props.latitude}  longitude={props.longitude}/>
   );
}

export default App;
