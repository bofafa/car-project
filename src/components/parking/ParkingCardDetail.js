import { Link, useLocation } from "react-router-dom";

const ParkingCardDetail = () => {
  const location = useLocation();
  const card = location.state?.card;

  if (!card) return <p>Card not found!</p>;

  // Get hourlyCharges from privateCar
  const hourlyCharges = card.privateCar?.hourlyCharges || [];

  return (
    <div className="card-container" style={{ padding: "20px" }}>
      <h2>{card.name}</h2>
      <p>
  <strong> <i class="fa-solid fa-location-dot"></i> </strong>
  <a
    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.displayAddress)}`}
    target="_blank"
    rel="noreferrer"
  >
    {card.displayAddress}
  </a>
</p>
     

      <p><strong>電話：</strong>{card.contactNo}</p>
      <p><strong>網站：</strong><a href={card.website} target="_blank" rel="noreferrer">{card.website}</a></p>
      
      <h3><i class="fa-solid fa-square-parking"></i> 空置車位</h3>
      <p>總車位：{card.privateCar?.space || 0}</p>
      <p>電動車車位：{card.privateCar?.spaceEV || 0}</p>
      <p>殘疾人士車位：{card.privateCar?.spaceDIS || 0}</p>

      <h3><i class="fa-solid fa-sack-dollar"></i> 收費資料</h3>
      {hourlyCharges.map((charge, index) => (
        <div key={index} >
          <p><strong>適用日子：</strong>{charge.weekdays.join(", ")}</p>
          <p><strong>是否室內：</strong>{charge.covered === "covered" ? "是" : "否"}</p>
          <p><strong>收費類型：</strong>{charge.type === "hourly" ? "按小時計費" : charge.type}</p>
          <p><strong>每小時收費：</strong>${charge.price}</p>
          <p><strong>收費時間：</strong>{charge.periodStart} - {charge.periodEnd}</p>
        </div>
      ))}

      <Link to="/parking">
        <button>返回</button>
      </Link>
    </div>
  );
};

export default ParkingCardDetail;
