import './hotel.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import HotelCardList from "./HotelCardList";
import HotelCardDetail from './HotelCardDetail';
import cards from "./hotels.json";


const Hotel = () => {

  console.log(cards);

  return (
      <Routes>
        <Route path="/" element={<HotelCardList cards={cards} />} />
        <Route path="/card/:id" element={<HotelCardDetail cards={cards} />} />
      </Routes>
  )
};


export default Hotel;