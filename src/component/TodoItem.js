import React from "react";
import { BiCheckbox,BiCheckboxSquare, IconName } from "react-icons/bi";




// todo목록 하나
const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="check_box">{<i>체크박스 아이콘</i>}</div>
      <div>{todo.title}</div>
      <button>수정</button>
      <button>삭제</button>
    </>
  );
};

export default TodoItem;
