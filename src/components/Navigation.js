import React, {useState, useEffect }  from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import DateTimeComponent from "./DateTimeComponent";

function Navigation() {

    const [temperature, setTemperature] = useState([]);
    const [humidity, setHumidity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc"); 
          if (response){
            setTemperature(response.data.temperature.data.map(temp=>temp.value));
            setHumidity(response.data.humidity.data.map(humidity=>humidity.value));
          }        
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
  
      };    
  
      fetchData();
    }, []);

    console.log(temperature);

    console.log(humidity);
    

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top" id="mainNav">
      <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div>
            <i class="fa-solid fa-car fa-bounce fa-2xl"></i>
              Driving          
              {humidity < 50 && (
                <i class="fa-solid fa-sun"></i>
              )}
              {(humidity >= 50 && humidity <65) && (
                <i class="fa-solid fa-cloud-sun"></i>
              )}
              {humidity >= 65 && (
                <i class="fa-solid fa-cloud-rain"></i>
              )}
              <i className="fa-solid fa-temperature-half"></i>{temperature[18]}&deg;C
            </div>
            <div>
              <DateTimeComponent />
            </div>     
          </NavLink>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
              <div class="input-group rounded">
                  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
              </div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    主頁
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/construction">
                    道路工程
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/parking">
                    空置車位
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/hospital">
                    醫院
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/hotel">
                    酒店
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/restaurant">
                    米芝蓮餐廳
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    關於我們
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    聯絡我們
                  </NavLink>
                </li>
              </ul>
          </div>
      </div>
  </nav>
  
  );
}

export default Navigation;

