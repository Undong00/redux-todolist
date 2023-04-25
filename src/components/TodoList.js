import styled from "styled-components";
import { deleteuser } from "../redux/modules/users";
import { completeuser } from "../redux/modules/users";
import { canceluser } from "../redux/modules/users";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TodoItem from "./TodoItem";

const StList = styled.div`
  // list 간격 설정
  padding: 0 24px;
`;

const StWrapper = styled.div`
  // 리스트 안에 배치 설정
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

function TodoList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deletebtn = (id) => {
    // 삭제 버튼 id를 받아 id가 같지 않다며 제외한 배열 생성
    dispatch(deleteuser(id));
  };

  const completebtn = (id) => {
    // 완료 버튼 id를 받아서 해당 id의 user의 isDone을 true로 변경
    dispatch(completeuser(id));
  };

  const cancelbtn = (id) => {
    //  삭제 버튼 id를 받아서 id를 false로 변경
    dispatch(canceluser(id));
  };
  const user = useSelector((store) => store.reducer_user);
  return (
    <StList>
      <h2>Working.. 🔥</h2>
      <StWrapper>
        {user
          .filter((user) => user.isDone === false)
          .map((user) => {
            return (
              <TodoItem
                key={user.id}
                user={user}
                deletebtn={deletebtn}
                completebtn={completebtn}
                navigate={navigate}
                cancelbtn={cancelbtn}
              />
            );
          })}
      </StWrapper>
      <div>
        <h2>Done..!🎉</h2>
        <StWrapper>
          {user
            .filter((user) => user.isDone === true)
            .map((user) => {
              return (
                <TodoItem
                  key={user.id}
                  user={user}
                  deletebtn={deletebtn}
                  completebtn={completebtn}
                  navigate={navigate}
                  cancelbtn={cancelbtn}
                />
              );
            })}
        </StWrapper>
      </div>
    </StList>
  );
}

export default TodoList;
