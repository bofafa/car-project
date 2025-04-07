import './construction.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import ConstructionCardList from "./ConstructionCardList";
import ConstructionCardDetail from './ConstructionCardDetail';


const Construction = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://resource.data.one.gov.hk/td/roadworks-location/get_all_the_roadworks.json"); 
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
        <Route path="/" element={<ConstructionCardList cards={cards} />} />
        <Route path="/card/:id" element={<ConstructionCardDetail cards={cards} />} />
      </Routes>
  )
};


export default Construction;