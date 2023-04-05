import React from "react";
import styled from "styled-components";




const WeatherInsert = ({value, onChange, onClick}) => {



  return (
    <InputForm>
      <input type="text" placeholder="지역을 입력하세요." value={value} onChange={onChange} />
      <button onClick={onClick}>검색</button>
    </InputForm>
  );
};

export default WeatherInsert;

const InputForm = styled.div`
  width: 100%;
  position: absolute;
  top: 30%;
  left: 0;
  display: flex;
  justify-content: center;
  input {
    width: 60%;
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    font-size: 18px;
    outline: none;
  }
  button {
    width: 20%;
    padding: 12px;
    margin-left: 12px;
    background: #1C3879;
    font-size: 18px;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }
`;
