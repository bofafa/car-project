import React from "react";
import aboutUs from '../assets/img/freerider3.jpg'

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <h2>自駕遊發現新世界，做一個快樂的自由駕駛者!</h2>

            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={aboutUs}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">自駕樂</h1>
            <p>
            香港人口眾多，車輛眾多，假日期間市中心變得越來越擁擠。香港雖然是購物、美食的天堂，但不代表這裡缺乏美景。如果你想在這座繁華的城市享受片刻的寧靜，自由購物，品嚐美味佳餚，與家人一起欣賞美景，不妨駕車前往各個小區。 我們的網站介紹符合您的需求的文章、旅遊景點和推薦行程，為您的假期計劃增添一些新奇。

如果你有自己的車，不妨和身邊的人一起，按照我們實用的專業建議，來一場香港自駕遊。

以下介紹的是香港自駕遊的熱門點，包含停車位訊息，這是香港自駕遊的一大難題。 透過我們的推薦，除了購物之外，您還可以參與各種景點的其他活動，您會發現這個地方有不同的吸引力。 本文整合了自駕遊的著名餐廳,商場等..........。它們都位於市中心，並在停車場附近設有停車站，讓大家可以輕鬆享受旅程。

Copyright © Company Name 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
