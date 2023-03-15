import React,{useState,useEffect, Children} from "react";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";


// Template > TodoInsert + (TodoList > TodoItem)
// 
const Template = ({Children}) => {

  return (
    <div>
      <TodoInsert >{Children}</TodoInsert>
      <TodoList>{Children}</TodoList>
    </div>
  );
};

export default Template;
 