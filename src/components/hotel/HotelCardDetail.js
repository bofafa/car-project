import { Link, useLocation } from "react-router-dom";


const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div>
      <h1>Card Details</h1>
      <h2>{card.hotel_name}</h2>
      <p>{card.address}</p>
      <p>Tel: {card.tel}</p>
      <p>Fax: {card.fax}</p>
      <Link to="/hotel"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
