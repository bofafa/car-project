import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top" id="mainNav">
      <div class="container">
          <NavLink className="navbar-brand" to="/">
            <i class="fa-solid fa-car fa-bounce fa-lg"></i>
            Driving
          </NavLink>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarResponsive">
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

