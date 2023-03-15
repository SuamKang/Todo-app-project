import React from "react";
import { BiCheckbox,BiCheckboxSquare, IconName } from "react-icons/bi";




// todo목록 하나
const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="check_box">{<i>{BiCheckbox}</i>}</div>
      <div>{todo.title}</div>

    </>
  );
};

export default TodoItem;
