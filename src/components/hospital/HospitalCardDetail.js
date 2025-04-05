import { Link, useLocation } from "react-router-dom";
import './hospital.css';

const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div className="card-container">
      <h2>{card.institution_tc}</h2>
      <p>
      <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.address_tc)}`}
    target="_blank"
    rel="noreferrer"
  >
    <i class="fa-solid fa-location-dot"></i> {card.address_tc}
  </a>
  </p>
      <p>{card.cluster_tc}</p>
      <p>附急症服務: {card.with_AE_service_tc}</p>
      <Link to="/hospital"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
