import { Link, useLocation } from "react-router-dom";


const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div>
      <h1>Card Details</h1>
      <h2>{card.name}</h2>
      <p>{card.address}</p>
      <p>{card.sub_district}</p>
      <p>Tel: {card.tel}</p>
      <p>Stars: {card.stars}</p>
      <p>Introduction: {card.introduction}</p>
      <Link to="/restaurant"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
