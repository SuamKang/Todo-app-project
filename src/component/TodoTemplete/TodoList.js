import React,{useState} from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {readTodo} from "../../actions/index"


// todo목록들
const TodoList = ({todos}) => {


  
  return (
    <TodoListBox>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id = {todo.id}
          text ={todo.text}
          done = {todo.done}
        />
      ))}
    </TodoListBox>
  );
};

export default TodoList;

const TodoListBox = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto; // todo항목 길어지면 스크롤되게
`;
