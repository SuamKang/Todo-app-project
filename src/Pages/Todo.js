import React, { useCallback, useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import styled from "styled-components";
import Template from "../component/Template";
import TodoInsert from "../component/TodoInsert";
import TodoItem from "../component/TodoItem";
import TodoList from "../component/TodoList";

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

  // 할일 추가버튼 클릭 이벤트
  const handleInputClick = () => {
    // 추가할 todo
    const newTodo = {
      id: todos.length + 1,
      title: inputTodo,
      checked: false,
    };

    setTodos([...todos, newTodo]);
  };

  // 할일 추가 이벤트
  const handleInputOnChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInputTodo(value);
  };

  // 할일 체크박스 이벤트
  const handleInputChecked = (e) => {
    console.log(e.target.checked);
  };

  // list클릭시 작용하는 이벤트
  const handleOnClick = (id) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, checked: !item.checked } : item;
      })
    );
  };

  return (
    <div className="App">
      <div className="headers">
        <span>오늘 할일</span>
      </div>
      <main>
        <div className="todo-insert">
          <form action="#" name="todo_insert">
            <input
              type="text"
              placeholder="여기에 할일을 입력하세요"
              defaultValue={inputTodo}
              autoFocus
              onChange={handleInputOnChange}
            />
          </form>
          <button onClick={handleInputClick}>추가</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => {
            return todo.checked ? (
              <li
                style={{ color: "red", listStyle : "none"}}
                onClick={() => handleOnClick(todo.id)}
              >
                <input type="checkbox"/>
                {todo.title}
                <span>수정</span>
                <span>X</span>
              </li>
            ) : (
              <li
                style={{ color: "#000", listStyle: "none"}}
                onClick={() => handleOnClick(todo.id)}
              >
                <input type="checkbox"/>
                {todo.title}
                <span>수정</span>
                <span>X</span>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Todo;
