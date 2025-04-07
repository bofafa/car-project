import './hospital.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import HospitalCardList from "./HospitalCardList";
import HospitalCardDetail from './HospitalCardDetail';


const Hospital = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.ha.org.hk/opendata/facility-hosp.json"); 
        if (response){setCards(response.data);}        
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

  console.log(cards);

  return (
      <Routes>
        <Route path="/" element={<HospitalCardList cards={cards} />} />
        <Route path="/card/:id" element={<HospitalCardDetail cards={cards} />} />
      </Routes>
  )
};


export default Hospital;