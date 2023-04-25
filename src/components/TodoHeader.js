import React from "react";
import styled from "styled-components";

const Sthead = styled.header`
  // 헤드
  background: linear-gradient(#99201c, #f56545);
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 20px;
  color: white;
`;

function TodoHeader() {
  return (
    <Sthead>
      <div>My Todo List</div>
      <div>React</div>
    </Sthead>
  );
}

export default TodoHeader;
