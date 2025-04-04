import "./restaurant.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import RestaurantCardList from "./RestaurantCardList";
import RestaurantCardDetail from './RestaurantCardDetail';
import cards from "./restaurant.json";


const Restaurant = () => {

  console.log(cards);

  return (
      <Routes>
        <Route path="/" element={<RestaurantCardList cards={cards} />} />
        <Route path="/card/:id" element={<RestaurantCardDetail cards={cards} />} />
      </Routes>
  )
};


export default Restaurant;