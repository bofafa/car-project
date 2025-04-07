import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import SearchResults from './components/SearchResults';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Construction,
  ConstructionCardList,
  ConstructionCardDetail,
  Parking,
  ParkingCardList,
  ParkingCardDetail,
  Hospital,
  HospitalCardList,
  HospitalCardDetail,
  Hotel,
  HotelCardList,
  HotelCardDetail,
  Restaurant,
  RestaurantCardList,
  RestaurantCardDetail,
  About,
  Contact,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/construction/*" element={<Construction />}>
        <Route index element={<ConstructionCardList />} />
        <Route path="card/:id" element={<ConstructionCardDetail />} />
      </Route>
      
      <Route path="/parking/*" element={<Parking />}>
        <Route index element={<ParkingCardList />} />
        <Route path="card/:id" element={<ParkingCardDetail />} />
      </Route>
      
      <Route path="/hospital/*" element={<Hospital />}>
        <Route index element={<HospitalCardList />} />
        <Route path="card/:id" element={<HospitalCardDetail />} />
      </Route>
      
      <Route path="/hotel/*" element={<Hotel />}>
        <Route index element={<HotelCardList />} />
        <Route path="card/:id" element={<HotelCardDetail />} />
      </Route>
      
      <Route path="/restaurant/*" element={<Restaurant />}>
        <Route index element={<RestaurantCardList />} />
        <Route path="card/:id" element={<RestaurantCardDetail />} />
      </Route>
      
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
    <Footer />
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
