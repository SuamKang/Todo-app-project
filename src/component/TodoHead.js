import React from "react";
import styled from "styled-components";

const Header = styled.div`
  padding: 40px 30px 20px 30px;
  border-bottom: 1px solid #e9ecef;
  text-align: center;
  line-height: 1.5;
  h1 {
    margin: 0;
    font-size: 36px;
    font-weight: 800;
    color: #1C3879;
  }
  .date {
    margin-top: 10px;
    color: #868e96;
    text-align: right;
  }
  .task-left {
    color: #1C3879;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    text-align: right;
  }
`;

const TodoHead = ({ todos }) => {

  
  // 날짜 불러오기
  const today = new Date();
  // 날짜
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  // 요일
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long'
  })

  // 남은 할일 개수
  const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <Header>
      <h1>오늘 할 일</h1>
      <div className="date">{dateString} <span>{dayName}</span></div>
      <div className="task-left">할일 {undoneTasks.length}개 남음</div>
    </Header>
  );
};

export default TodoHead;