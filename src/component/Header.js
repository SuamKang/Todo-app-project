import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";

const Nav = styled.header`
  margin-top: 10px;
  background-color: #f9f5eb;
  .header-inner {
    max-width: 980px;
    height: 50px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
  }
`;

const MenuBar = styled.div`
  float: left;
  width: 300px;
  background: #002B5B;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 2 5 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & li {
        padding: 5px 5px;
        &:nth-child(2) {
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;
        }
    }
    & a {
        display: block;
        padding: 10px;
        color: #fff;
        &:hover {
          color: #FFEBB7;
          text-decoration: underline;
        }
      }
    }
`;

const LoginBar = styled.div`
  float: right;
  max-width: 200px;
  height: 100%;
  background: #002B5B;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0 0 0 0.05);
  display: flex;
  align-items: center;
  .login-menu {
    width: 80px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #FFEBB7;
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <div className="header-inner">
        <MenuBar>
          <ul className="menu-list">
            <li>
              <Link to="/">오늘 할 일</Link>
            </li>
            <li>
              <Link to="/weather">오늘 날씨</Link>
            </li>
            <li>
              <Link to="/quotes">명언 모음집</Link>
            </li>
          </ul>
        </MenuBar>
        <LoginBar>
          <div className="login-menu">
            <Login />
          </div>
        </LoginBar>
      </div>
    </Nav>
  );
};

export default Header;
