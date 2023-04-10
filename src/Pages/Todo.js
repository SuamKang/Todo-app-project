import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import TodoList from "../component/TodoTemplete/TodoList";
import TodoInsert from "../component/TodoTemplete/TodoInsert";
import TodoHead from "../component/TodoTemplete/TodoHead";
import '../App.css'
import { readTodo } from "../actions/index";
import useFetch from "../util/useFetch";



// todo전체 레이아웃
const TodoTemplate = styled.div`
  width: 520px;
  height: 750px;
  position: relative; // todo 템플릿을 부모위치로 설정하기위해
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2 5 rgba(0,0,0, .5);
  margin: 96px auto 32px;
  display: flex; 
  flex-direction: column;
`;

const Todo = () => {

  // const dispatch = useDispatch();

  const [todos, isPending] = useFetch(`http://localhost:3001/todos`)

  // 1 데이터 체크를 한다
  // 2 데이터 요청을 보낸다
  // 3 데이터 요청을 보낸 값을 state값으로 저장한다.
  // 4 state를 뿌려준다.
  return (
      <>
      {todos && 
        <TodoTemplate>
          <TodoHead todos={todos}/>
          <TodoList todos={todos} isPending={isPending}/>
          <TodoInsert/>
        </TodoTemplate>}
      </>
  );
};

export default Todo;



  // // inputTodo 인풋 이벤트 받기
  // const changeFrom = (e) => {
  //   e.preventDefault();
  //   setTodos(e.target.value);
  // };  

  // // 할일 추가 이벤트
  // const onCreate = () => {
  //   // 새로 추가할 todo
  //   const newTodo = {
  //     id: todos.length + 1,
  //     text: inputTodo,
  //     done: false,
  //   };
  //   setTodos([...todos, newTodo]);
  //   setInputTodo(""); // 인풋창 초기화
  // };

  // // 할일 선택 항목 삭제 이벤트
  // const onRemove = (id) => {y
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // }

  // // 할일 선택 항목 수정 이벤트
  // const onToggle = (id) => {
  //   setTodos(todos.map( todo => todo.id === id ? {...todo, done : !todo.done} : todo));
  // }