import './parking.css';
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import ParkingCardList from "./ParkingCardList";
import ParkingCardDetail from './ParkingCardDetail';


const Parking = () => {
  const [cards, setCards] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.data.gov.hk/v1/carpark-info-vacancy?lang=zh_TW&data=vacancy&vehicleTypes=privateCar"); 
        if (response){setVacancies(response.data.results);} 
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }

      try {
        const response = await axios.get("https://api.data.gov.hk/v1/carpark-info-vacancy?lang=zh_TW"); 
        if (response){setCards(response.data.results);}        
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }

    };    

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;  

  console.log(vacancies);

  console.log(cards);

  return (
      <Routes>
        <Route path="/" element={<ParkingCardList cards={cards} vacancies={vacancies} />} />
        <Route path="/card/:id" element={<ParkingCardDetail cards={cards} />} />
      </Routes>
  )
};


export default Parking;