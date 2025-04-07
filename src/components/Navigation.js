import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ useNavigate
import axios from "axios";
import DateTimeComponent from "./DateTimeComponent";

function Navigation() {
  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ search state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc"
        );
        if (response) {
          setTemperature(response.data.temperature.data.map(temp => temp.value));
          setHumidity(response.data.humidity.data.map(h => h.value));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`); // ✅ Go to search page
    }
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top" id="mainNav">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <div>
            <i className="fa-solid fa-car fa-2xl"></i> Driving
            {humidity[0] < 50 && <i className="fa-solid fa-sun"></i>}
            {humidity[0] >= 50 && humidity[0] <= 65 && <i className="fa-solid fa-cloud-sun"></i>}
            {humidity[0] > 65 && <i className="fa-solid fa-cloud-rain"></i>}
            <i className="fa-solid fa-temperature-half"></i> {temperature[18]}°C
          </div>
          <div><DateTimeComponent /></div>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">

          {/* ✅ Search bar */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>

          {/* ✅ Navigation links */}
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/">主頁</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/construction">道路工程</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/parking">空置車位</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/hospital">醫院</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/hotel">酒店</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/restaurant">米芝蓮餐廳</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">關於我們</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">聯絡我們</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
