import React from "react";
import styled from "styled-components";




const WeatherInsert = ({value, onChange, onClick}) => {

  return (
    <InputContainer>
      <InputForm >
          <input type="text"  placeholder="지역을 입력하세요." value={value} onChange={onChange} />
          <button onClick={onClick}>검색</button>
      </InputForm>
    </InputContainer>
  );
};

export default WeatherInsert;

const InputContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 22%;
  left: 0;
  border-bottom : 1px solid #e9ecef;
`;

const InputForm = styled.div`
  padding: 40px 0;
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
    &:focus{
      border: 1px solid #1C3879;
      background-color: rgb(11, 36, 71, .03);
    }
  }
  button {
    width: 20%;
    padding: 12px;
    margin-left: 12px;
    background: #002B5B;
    font-size: 18px;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all ease-in 0.1s;
    &:hover {
      background: rgb(28, 56, 121, 0.8);
    }
  }
`;


