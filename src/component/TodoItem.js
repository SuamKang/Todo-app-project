import React from "react";
import styled , {css} from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md'; // react icons 사용

// 체크박스 모양 컴포넌트(동그라미)
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 24px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done && css` // done값이 있으면 보여주기
  border: 1px solid #1C3879;
  color: #1C3879;
  `}
`;
// 텍스트 컴포넌트
const Text = styled.div`
  flex: 1; // 아이템박스안에서 텍스트가 늘어나는 크기를 모두 차지하게끔
  font-size: 20px;
  color: #495057;
  ${props => props.done && css`
    color: #ced4da; // 아주 연하게
  `}
`;
// 삭제 버튼 컴포넌트
const Delete = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover { // 호버시 빨간색으로 뜨게끔
    color: #c92a2a;
  }
`;
// 메인 아이템 컴포넌트
const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Delete} { // item박스 하나에 hover했을때 Delete 나오도록(Delete컴포넌트를 셀렉터로 사용)
      opacity: 1;
    }
  }
`;

// todo목록 하나
const TodoItem = ({ todo, onRemove, onToggle}) => {
  const { id, text, done } = todo;
  return (
    <TodoItemBox>
      <CheckCircle done={done} onClick={() => onToggle(id)}>
        {done && <MdDone/>} 
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Delete onClick={() => onRemove(id)}>
        <MdDelete />
      </Delete>
    </TodoItemBox>
  );
};

export default TodoItem;
