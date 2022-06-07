import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


window.onload = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
     let lat = position.coords.latitude;
     let long = position.coords.longitude;

  const MAPS = {
    "myPlace" : [lat,long],
    "New York": [40.730610,74.0060],
    "Australia": []
  }

  const newYork = [40.7143, -74.006];
  const sydney = [-33.8679, 151.2073]
  const london = [51.5085, -0.1257];
  const paris = [48.8566,2.3522];
  const tokyo = [35.6895, 139.6917];
  const seoul = [37.5665,126.9780];
  const moscow = [55.7558,37.6173];
  const amsterdam = [52.374, 4.8897];

  ReactDOM.render(
    <React.StrictMode>
      <App latitude={lat} longitude={long}/>
      <div className='list'>
        <App latitude={newYork[0]} longitude={newYork[1]} />
        <App latitude={sydney[0]} longitude={sydney[1]} />
        <App latitude={london[0]} longitude={london[1]} />
        <App latitude={paris[0]} longitude={paris[1]} />
        <App latitude={tokyo[0]} longitude={tokyo[1]} />
        <App latitude={seoul[0]} longitude={seoul[1]} />
        <App latitude={moscow[0]} longitude={moscow[1]} />
        <App latitude={amsterdam[0]} longitude={amsterdam[1]} />
      </div>
    </React.StrictMode>,
    document.getElementById('root')
  );
    })
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
