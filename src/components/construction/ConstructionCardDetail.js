import { Link, useLocation } from "react-router-dom";

const CardDetail = () => {

  const location = useLocation();
  const card = location.state?.card;

  console.log(card);

  if (!card) return <p>Card not found!</p>;
  
  return (
    <div>
      <h1>Card Details</h1>
      <h2>{card.workstype_tc}</h2>
      <p>{card.roadname_tc}</p>
      <p>開始時間: {card.starttime}</p>
      <p>結束時間: {card.endtime}</p>
      <Link to="/construction"><button>返回</button></Link>
    </div>
  );
};

export default CardDetail;
