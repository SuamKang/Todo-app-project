import React, { useState,useRef } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md"; // react 아이콘 삽입
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../../actions/index";
import { fetchCreate } from "../../util/api";


// 투두 인풋창 (버튼 클릭하면 인풋창(모달형태로) 나오도록)

const TodoInsert = () => {
  // const dispatch = useDispatch();
  
  const [open, setOpen] = useState(false); // input모달창 상태관리
  const [input, setInput] = useState(''); // input상태관리


  const onInputToggle = () => {
    setOpen(!open); // 반전 
  }


  const onChange = (e) => {
    const {value} = e.target;
    setInput(value)
  } 



  const onSubmit = (e) => {
    e.preventDefault();
    let todo ={
      text: input,
      done: false,
    }
    fetchCreate(`http://localhost:3001/todos`,todo)
  }


  return (
    <>
      {open && (
        <InputModal>
          <InputForm onSubmit={onSubmit}>
            <Input 
            type="text"
            name="text"
            value={input}
            onChange={(e) => onChange(e)}
            placeholder="할 일 추가 후, Enter를 누르세요" autoFocus />
          </InputForm>
        </InputModal>
      )}
      <PlusCircleBtn open={open} onClick={onInputToggle}>
        <MdAdd />
      </PlusCircleBtn>
    </>
  );
};

export default TodoInsert;



// 추가버튼 컴포넌트(동그란 모양)
const PlusCircleBtn = styled.div`
  width: 70px;
  height: 70px;
  font-size: 50px;
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background: #1c3879;
  &:hover {
    // 호버만했을때
    background: rgb(28, 56, 121, 0.5);
  }
  &:active {
    // 클릭했을때
    background: rgb(28, 56, 121, 0.9);
  }
  display: flex; // + 아이콘 중앙정렬
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 2%;
  bottom: 2%;
  z-index: 5;
  transform: translate(60%, 60%); // 우측 하단에 위치하게함
  transition: all ease-in 0.1s;
  // 인풋창이 open상태였을때
  ${(props) =>
    props.open &&
    css`
      background: #c92a2a; // 진한 빨강
      &:hover {
        background: #ffc9c9; // 연한 빨강
      }
      &:active {
        background: #c92a2a; // 클릭했을때 다시 진한빨강
      }
      transform: translate(60%, -10%) rotate(45deg); // 버튼 돌리기
    `}
`;
// 인풋모달창 컴포넌트
const InputModal = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;
// 모달창 안 컴포넌트
const InputForm = styled.form`
  background: #1C3879;
  padding: 30px;
  border-bottom-left-radius: 16px; // 모서리 배경과 맞춤
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
// 실제 인풋창 컴포넌트
const Input = styled.input`
  width: 90%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  &:focus::placeholder {
    color: transparent; // 클릭시 placeholder 없애기
  }
`;
