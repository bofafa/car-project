import { Link, useLocation } from "react-router-dom";

const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div>
      <h1>Card Details</h1>
      <h2>{card.institution_tc}</h2>
      <p>{card.address_tc}</p>
      <p>{card.cluster_tc}</p>
      <p>附急症服務: {card.with_AE_service_tc}</p>
      <Link to="/hospital"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
