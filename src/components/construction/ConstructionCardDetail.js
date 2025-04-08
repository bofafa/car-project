import { Link, useLocation } from "react-router-dom";

const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div className="card-container">
      
      <h2>{card.workstype_tc}</h2>
      <h4>
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.roadname_tc)}`}
    target="_blank"
    rel="noreferrer"
  >
    <i class="fa-solid fa-location-dot"></i> {card.roadname_tc}
  </a>
</h4>
      <p>開始時間: {card.starttime}</p>
      <p>結束時間: {card.endtime}</p>
      <p>工程: {card.worksstatus_tc} </p>
      <p>路線: {card.locdesc_tc} </p>
      <Link to="/construction"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
