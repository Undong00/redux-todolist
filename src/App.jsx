import React from "react";
import styled from "styled-components";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import Router from "./shared/Router";

// import { resettitle } from "./redux/modules/title";
// import { resetbody } from "./redux/modules/body";

const StLayout = styled.div`
  // 전체 설정
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

function App() {
  // body의 state

  return (
    <div>
      <StLayout>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </StLayout>
    </div>
  );
}

export default App;
