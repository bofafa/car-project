import React from "react";
import { useLocation } from "react-router-dom";
import restaurantData from "../components/restaurant/restaurant.json";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const keyword = query.get("keyword") || "";

  const results = restaurantData.filter(item =>
    item.name.includes(keyword) ||
    item.address.includes(keyword) ||
    item.introduction.includes(keyword)
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 搜尋結果: {keyword}</h2>
      {results.length === 0 ? (
        <p>這裡將顯示與「{keyword}」相關的酒店或車位結果。</p>
      ) : (
        results.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{item.name}</h3>
            <p>📍 地址：{item.address}</p>
            <p>⭐ 星級：{item.stars}</p>
            <p>📞 電話：{item.tel}</p>
            <p>🍽️ 簡介：{item.introduction}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
