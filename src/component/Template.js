import React, { useState, useEffect, Children } from "react";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";

// Template > TodoInsert + (TodoList > TodoItem)
//
const Template = ({ todos,setTodos,inputTodo,setInputTodo }) => {
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
