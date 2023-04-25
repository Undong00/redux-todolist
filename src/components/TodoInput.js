import React from "react";
import styled from "styled-components";
import { adduser } from "../redux/modules/users";
import { setbody } from "../redux/modules/body";
import { settitle } from "../redux/modules/title";
import { useSelector, useDispatch } from "react-redux";
import { resetbody } from "../redux/modules/body";
import { resettitle } from "../redux/modules/title";
const StInputList = styled.div`
  // Input div
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  background: linear-gradient(#f56545, #99201c);
  font-size: 20px;
  color: white;
`;
const StInput = styled.input`
  // input
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
const StBtn = styled.button`
  // 버튼
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  border: none;
  border-radius: 12px;
  color: #ece1d6;
  font-weight: 700;
  height: 40px;
  color: #99201c;
  width: 140px;
`;

function TodoInput() {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.reducer_title);
  const body = useSelector((store) => store.reducer_body);
  const titlechange = (e) => {
    dispatch(settitle(e));
  };

  const bodychange = (e) => {
    dispatch(setbody(e));
  };

  const addbtn = () => {
    // 추가 버튼
    dispatch(adduser(title, body));
    dispatch(resettitle()); // 초기화
    dispatch(resetbody()); // 초기화
  };
  return (
    <StInputList>
      제목
      <StInput type="text" value={title} onChange={titlechange} />
      내용
      <StInput type="text" value={body} onChange={bodychange} />
      <StBtn onClick={addbtn}>추가하기</StBtn>
    </StInputList>
  );
}
export default TodoInput;
