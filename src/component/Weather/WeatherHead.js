import React from "react";
import styled from "styled-components";

const WeatherHead = () => {



  const today = new Date();
  // 날짜
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // 요일
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <Header>
      <h1>오늘 날씨</h1>
      <div className="date">{dateString} {dayName}</div>
    </Header>
  );
};

export default WeatherHead;

const Header = styled.div`
  padding: 40px 30px 20px 30px;
  border-bottom: 1px solid #e9ecef;
  text-align: center;
  line-height: 1.5;
  h1 {
    margin: 0;
    font-size: 36px;
    font-weight: 800;
    color: #002B5B;
  }
  .date {
    margin-top: 20px;
    color: #868e96;
    text-align: right;
  }
`;
