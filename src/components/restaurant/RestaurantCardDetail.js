import { Link, useLocation } from "react-router-dom";


const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div>
      <h2>{card.name}</h2>
      <p>{card.sub_district}</p>
      <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.address)}`}
    target="_blank"
    rel="noreferrer"
  >
   <i class="fa-solid fa-location-dot"> </i> {card.address}
  </a>
      <p>Tel: {card.tel}</p>
      <p>米芝蓮星: {card.stars} <i class="fa-solid fa-star"></i></p>
      <p>菜式: {card.introduction}</p>
      <Link to="/restaurant"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
