import React from "react";
import styled from "styled-components";


const WeatherHead = () => {
    return(
        <Header>
            <h1>오늘 날씨</h1>
            <div className="date">날짜정보</div>
            <div className="">지역정보</div>
        </Header>
    )
}

export default WeatherHead;



const Header = styled.div`
  padding: 40px 30px 20px 30px;
  border-bottom: 1px solid #e9ecef;
  text-align: center;
  line-height: 1.5;
`;