import React from "react";
import contact from "../assets/img/Contact.png";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={contact}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">聯絡我們</h1>
            <ul class="list-unstyled mb-0">
              <li class="mb-1">
                <i class="fa-regular fa-envelope"></i>
                <a href="#!">admin_kln@hksc.edu.hks</a>
              </li>
              <li class="mb-1">
                <i class="fa-solid fa-phone"></i>
                <a href="#!">熱線 (852) 2730 5653</a>
              </li>
              <li class="mb-1">
                <i class="fa-solid fa-location-dot"></i>
                <a href="#!">尖沙咀柯士甸道81號 (港鐵佐敦站C2出口) / (西鐵柯士甸站F出口)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
