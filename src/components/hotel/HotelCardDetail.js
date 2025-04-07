import { Link, useLocation } from "react-router-dom";


const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div>
      <h2>{card.hotel_name}</h2>
      <p>
      <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.address)}`}
    target="_blank"
    rel="noreferrer"
  >
   <i class="fa-solid fa-location-dot"></i> {card.address}
  </a>
  </p>
      <p>Tel: {card.tel}</p>
      <p>Fax: {card.fax}</p>
      <p>酒店級別: {card.stars} <i class="fa-solid fa-star"></i></p>
      <p>自助餐: {card.buffet ? "提供" : "沒提供"}</p>
      <Link to="/hotel"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
