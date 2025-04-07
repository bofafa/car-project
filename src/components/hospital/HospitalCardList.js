import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardList = ({ cards }) => {  

  const [search, setSearch] = useState("");      

  const filteredCards = cards?.filter((card) =>
    card.address_tc.includes(search)
  );

  
  return (    
    <div>
      <div>
        <label htmlFor="sub-district">選擇地區：</label>
        <select id="sub-district" name="sub-district" value={search}
          onChange={(e) => setSearch(e.target.value)}>
          <option value="">--請選擇地區--</option>
          
          <option value="中環">中西區 - 中環</option>
          <option value="上環">中西區 - 上環</option>
          <option value="西營盤">中西區 - 西營盤</option>
          <option value="山頂">中西區 - 山頂</option>
          <option value="北角">東區 - 北角</option>
          <option value="鰂魚涌">東區 - 鰂魚涌</option>
          <option value="筲箕灣">東區 - 筲箕灣</option>
          <option value="柴灣">東區 - 柴灣</option>
          <option value="赤柱">南區 - 赤柱</option>
          <option value="鴨脷洲">南區 - 鴨脷洲</option>
          <option value="淺水灣">南區 - 淺水灣</option>
          <option value="香港仔">南區 - 香港仔</option>
          <option value="灣仔">灣仔區 - 灣仔</option>
          <option value="銅鑼灣">灣仔區 - 銅鑼灣</option>
          <option value="跑馬地">灣仔區 - 跑馬地</option>
          
          <option value="九龍城">九龍城區 - 九龍城</option>
          <option value="何文田">九龍城區 - 何文田</option>
          <option value="土瓜灣">九龍城區 - 土瓜灣</option>
          <option value="九龍塘">九龍城區 - 九龍塘</option>
          <option value="紅磡">九龍城區 - 紅磡</option>
          <option value="觀塘">觀塘區 - 觀塘</option>
          <option value="九龍灣">觀塘區 - 九龍灣</option>
          <option value="藍田">觀塘區 - 藍田</option>
          <option value="油塘">觀塘區 - 油塘</option>
          <option value="深水埗">深水埗區 - 深水埗</option>
          <option value="荔枝角">深水埗區 - 荔枝角</option>
          <option value="長沙灣">深水埗區 - 長沙灣</option>
          <option value="新蒲崗">黃大仙區 - 新蒲崗</option>
          <option value="黃大仙">黃大仙區 - 黃大仙</option>
          <option value="鑽石山">黃大仙區 - 鑽石山</option>
          <option value="慈雲山">黃大仙區 - 慈雲山</option>
          <option value="佐敦">油尖旺區 - 佐敦</option>
          <option value="尖沙咀">油尖旺區 - 尖沙咀</option>
          <option value="旺角">油尖旺區 - 旺角</option>
          
          <option value="長洲">離島區 - 長洲</option>
          <option value="大嶼山">離島區 - 大嶼山</option>
          <option value="東涌">離島區 - 東涌</option>
          <option value="葵涌">葵青區 - 葵涌</option>
          <option value="青衣">葵青區 - 青衣</option>
          <option value="石湖墟">北區 - 石湖墟</option>
          <option value="粉嶺">北區 - 粉嶺</option>
          <option value="上水">北區 - 上水</option>
          <option value="西貢">西貢區 - 西貢</option>
          <option value="將軍澳">西貢區 - 將軍澳</option>
          <option value="沙田">沙田區 - 沙田</option>
          <option value="馬鞍山">沙田區 - 馬鞍山</option>
          <option value="大埔">大埔區 - 大埔</option>
          <option value="大尾篤">大埔區 - 大尾篤</option>
          <option value="荃灣">荃灣區 - 荃灣</option>
          <option value="汀九">荃灣區 - 汀九</option>
          <option value="屯門">屯門區 - 屯門</option>
          <option value="元朗">元朗區 - 元朗</option>
          <option value="天水圍">元朗區 - 天水圍</option>
        </select>
      </div>
      
      <div className="card-container">
        {filteredCards==""?<h4>沒有相關資訊</h4>:filteredCards==""?<h4>沒有相關資訊</h4>:filteredCards?.map((card) => (
          <Link to={`/hospital/card/${card.institution_tc}`} state={{card}} key={card.institution_tc}>
            <div className="card">
              <h3>{card.institution_tc}</h3>
              <p> <i class="fa-solid fa-location-dot"> </i>  {card.address_tc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardList;
