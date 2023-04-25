import React from "react";
import styled from "styled-components";

const StListBox = styled.div`
  // 박스 설정
  border: 4px solid black;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  background: linear-gradient(#f56545, #99201c);
`;

const StListBtnList = styled.div`
  // 리스트 버튼 간격
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const StListBtn = styled.button`
  // 리스트 버튼
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: white;
  border: 2px solid #99201c;
`;

function TodoItem({ user, deletebtn, completebtn, cancelbtn, navigate }) {
  return (
    <StListBox>
      <p
        onClick={() => {
          navigate(`/detail/${user.id}`);
        }}
      >
        상세보기
      </p>
      <h2>{user.title}</h2>
      {user.body}
      <StListBtnList>
        <StListBtn onClick={() => deletebtn(user.id)}>삭제하기</StListBtn>
        <StListBtn
          onClick={() =>
            user.isDone ? cancelbtn(user.id) : completebtn(user.id)
          }
        >
          {user.isDone ? "취소하기" : "완료하기"}
        </StListBtn>
      </StListBtnList>
    </StListBox>
  );
}

export default TodoItem;
