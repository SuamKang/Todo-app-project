import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'; // react icons 사용
// import { removeTodo, toggleTodo, readTodo } from "../../actions";
// import { useDispatch } from "react-redux";
import { fetchDelete, fetchPatch } from '../../util/api';

// todo목록 하나
const TodoItem = ({ id, done, text }) => {
  // const dispatch = useDispatch();

  // 해당 id제거 요청
  const handleRemove = () => {
    fetchDelete(`http://localhost:3001/todos/`, id);
  };

  // 해당 id done상태 수정요청
  const handleToggle = (e) => {
    e.preventDefault();

    let patchData = { done: !done };
    console.log(done);
    fetchPatch(`http://localhost:3001/todos/`, id, patchData);
  };

  return (
    <TodoItemBox>
      <CheckCircle done={done} onClick={handleToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Delete onClick={handleRemove}>
        <MdDelete />
      </Delete>
    </TodoItemBox>
  );
};

export default TodoItem;

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
  ${(props) =>
    props.done &&
    css`
      // done값이 있으면 보여주기
      border: 1px solid #1c3879;
      color: #1c3879;
    `}
`;
// 텍스트 컴포넌트
const Text = styled.div`
  flex: 1; // 아이템박스안에서 텍스트가 늘어나는 크기를 모두 차지하게끔
  font-size: 20px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
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
  &:hover {
    // 호버시 빨간색으로 뜨게끔
    color: #c92a2a;
  }
`;
// 메인 아이템 컴포넌트
const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Delete} {
      // item박스 하나에 hover했을때 Delete 나오도록(Delete컴포넌트를 셀렉터로 사용)
      opacity: 1;
    }
  }
`;
