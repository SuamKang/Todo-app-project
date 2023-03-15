import React, { useCallback, useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import styled from "styled-components";
import Template from "../component/Template";

// 더미 데이터
const dummyData = [
  {
    id: 1,
    title: "할일1",
    checked: false,
  },
  {
    id: 2,
    title: "할일2",
    checked: false,
  },
  {
    id: 3,
    title: "할일3",
    checked: false,
  },
];

// 이부분은 todo페이지의 App.js같은 메인컴포넌트이다
const Todo = () => {
  // 앞으로 추가 할일 인풋 상태
  const [inputTodo, setInputTodo] = useState("");
  // 할일들
  const [todos, setTodos] = useState(dummyData);

  return (
    <div className="App">
      <div className="headers">
        <span>오늘 할일</span>
      </div>
      <Template  className="todo-template" todos={todos} setTodos={setTodos} inputTodo={inputTodo} setInputTodo={setInputTodo}/>
    </div>
  );
};

export default Todo;
