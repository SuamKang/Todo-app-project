import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 10px;
  margin: auto;
  //인라인 플랙스 사용
  display: inline-flex;
  justify-content: center;
`;

const Nav = () => {
  return (
    <Header>
      <div className="logo">
        <img />
      </div>
      <div className="header_title">
        <p>오늘 할 일</p>
      </div>
      <div className="nav">
        <div className="nav_bar">
          <div className="nav_bar--menu">

          </div>
        </div>
      </div>
    </Header>
  );
};

export default Nav;