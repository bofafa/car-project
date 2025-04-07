import React from "react";
import driving from "../assets/img/driving.jpg";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={driving}
              alt="parking sign"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">專屬於您的卓越體驗</h1>
            <p>
            {/*在資訊瞬息萬變的時代， 我們致力於為您提供高效、直覺且安全的數位服務。無論您是初次造訪或長期夥伴，我們皆以「用戶為本」的理念，打造流暢的一站式平台，滿足您的多元需求。*suggested by Lun*/}  
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
