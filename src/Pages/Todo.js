import { useState } from "react";
import styled from "styled-components";
import TodoList from "../component/TodoList";
import TodoInsert from "../component/TodoInsert";
import TodoHead from "../component/TodoHead";
import '../App.css'

// todo전체 레이아웃
const TodoTemplate = styled.div`
  width: 520px;
  height: 750px;
  position: relative;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2 5 rgba(0,0,0, .05);

  margin: 96px auto 32px;
  display: flex; 
  flex-direction: column;
`;

const Todo = () => {
  // 앞으로 추가 할일 인풋 상태
  const [inputTodo, setInputTodo] = useState("");
  // 할일들
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "운동하기",
      done: false,
    },
    {
      id: 2,
      text: "빨래하기",
      done: false,
    },
    { 
      id: 3,
      text: "리액트 공부하기",
      done: false,
    },
  ]);

  // inputTodo 인풋 이벤트 받기
  const onChange = (e) => {
    e.preventDefault();
    const {value} = e.target;
    setInputTodo(value);
  };  

  // 할일 추가 이벤트
  const onCreate = () => {
    // 새로 추가할 todo
    const newTodo = {
      id: todos.length + 1,
      text: inputTodo,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setInputTodo(""); // 인풋창 초기화
  };

  // 할일 선택 항목 삭제 이벤트
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // 할일 선택 항목 수정 이벤트
  const onToggle = (id) => {
    setTodos(todos.map( todo => todo.id === id ? {...todo, done : !todo.done} : todo));
  }



 // 기존 Template 컴포넌트 삭제(불필요한 컴포넌트였음)
  return (
    <TodoTemplate>
      <TodoHead todos={todos} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <TodoInsert inputTodo={inputTodo} setInputTodo={setInputTodo} onCreate={onCreate} onChange={onChange}/>
    </TodoTemplate>
  );
};

export default Todo;
