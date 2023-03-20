import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import styled from "styled-components";

// Template > TodoInsert + (TodoList > TodoItem)
// Todo 페이지를 직접적으로 화면에 Render하는 부분

const Template = ({ todos, setTodos, inputTodo, setInputTodo }) => {
  return (
    <div>
      <TodoInsert
        className="todo-insert"
        todos={todos}
        setTodos={setTodos}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
      />
      <TodoList className="todo-list" todos={todos} setTodos={setTodos} />{" "}
    </div>
  );
};

export default Template;
