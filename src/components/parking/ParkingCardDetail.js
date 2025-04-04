import { Link, useLocation } from "react-router-dom";


const ParkingCardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div>
      <h1>Card Details</h1>
      <h2>{card.name}</h2>
      <p>{card.displayAddress}</p>
      <p>Tel: {card.contactNo}</p>
      <p><a href={card.website}>{card.website}</a></p>
      <Link to="/parking"><button>返回</button></Link>
    </div>
  );
};

export default ParkingCardDetail;
