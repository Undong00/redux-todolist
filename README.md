# 💻 프로젝트 Description
### 프로젝트 명 : TodoList
> React 훅 useState와 props, jsx를 이용해서 간단히 만든 todolist에 redux를 사용하여 다시 만드는 todolist입니다. 

---

## ✅ 배포

❌


----


## 📝 기능 

**이 코드는 React와 Redux를 사용하여 만든 ToDo List 애플리케이션입니다.**

**styled-components를 사용하여 스타일링을 하고, useSelector와 useDispatch 훅을 사용하여 Redux의 상태를 가져오고 액션을 발생시켜 상태를 변경합니다.**

**이 애플리케이션은 입력된 제목과 내용을 가지고 ToDo 항목을 추가하고, 추가된 항목은 목록에 보여집니다.**

**각 ToDo 항목은 완료 버튼과 삭제 버튼이 있으며, 완료된 항목은 Working 목록에서 Done 목록으로 이동할 수 있습니다.**

**useNavigate를 사용하여 상세보기를 눌렀을 때 detail 페이지로 이동하게 만들었습니다. 또한 useParams를 사용하여 상세보기를 눌렀을 때 id, title, body를 받아오게 했습니다.**

**컴포넌트 분리 전 원본 코드**

```jsx
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { adduser } from "./redux/modules/users";
import { deleteuser } from "./redux/modules/users";
import { completeuser } from "./redux/modules/users";
import { canceluser } from "./redux/modules/users";
import { useNavigate } from "react-router-dom";
// import Router from "./shared/Router";
import { setbody } from "./redux/modules/body";
import { settitle } from "./redux/modules/title";
// import { resettitle } from "./redux/modules/title";
// import { resetbody } from "./redux/modules/body";

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

const StLayout = styled.div`
  // 전체 설정
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

const StList = styled.div`
  // list 간격 설정
  padding: 0 24px;
`;

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

const StWrapper = styled.div`
  // 리스트 안에 배치 설정
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

function App() {
  // body의 state
  const user = useSelector((store) => store.reducer_user);
  const title = useSelector((store) => store.reducer_title);
  const body = useSelector((store) => store.reducer_body);
  const nevigate = useNavigate();
  const dispatch = useDispatch(); // 액션을 받아오기위해서

  const titlechange = (e) => {
    dispatch(settitle(e));
  };

  const bodychange = (e) => {
    dispatch(setbody(e));
  };

  const addbtn = (e) => {
    // 추가 버튼
    dispatch(adduser(title, body));
    dispatch(setbody(e)); // 초기화
    dispatch(settitle(e)); // 초기화
  };

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

  return (
    <div>
      <StLayout>
        <Sthead>
          <div>My Todo List</div>
          <div>React</div>
        </Sthead>
        <StInputList>
          제목
          <StInput type="text" value={title} onChange={titlechange} />
          내용
          <StInput type="text" value={body} onChange={bodychange} />
          <StBtn onClick={addbtn}>추가하기</StBtn>
        </StInputList>
        <StList>
          <h2>Working.. 🔥</h2>
          <StWrapper>
            {user
              .filter((user) => user.isDone === false)
              .map((user) => {
                return (
                  <StListBox key={user.id}>
                    <p
                      onClick={() => {
                        nevigate(`/detail/${user.id}`);
                      }}
                    >
                      상세보기
                    </p>
                    <h2>{user.title}</h2>
                    {user.body}
                    <StListBtnList>
                      <StListBtn onClick={() => deletebtn(user.id)}>
                        삭제하기
                      </StListBtn>
                      <StListBtn onClick={() => completebtn(user.id)}>
                        {user.isDone ? "취소하기" : "완료하기"}
                      </StListBtn>
                    </StListBtnList>
                  </StListBox>
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
                    <StListBox key={user.id}>
                      <p
                        onClick={() => {
                          nevigate(`/detail/${user.id}`);
                        }}
                      >
                        상세보기
                      </p>
                      <h2>{user.title}</h2>
                      {user.body}
                      <StListBtnList>
                        <StListBtn onClick={() => deletebtn(user.id)}>
                          삭제하기
                        </StListBtn>
                        <StListBtn onClick={() => cancelbtn(user.id)}>
                          {user.isDone ? "취소하기" : "완료하기"}
                        </StListBtn>
                      </StListBtnList>
                    </StListBox>
                  );
                })}
            </StWrapper>
          </div>
        </StList>
      </StLayout>
    </div>
  );
}

export default App;
```


---

## ✍️ 업데이트 내역

------


## 🔡 개발 환경 및 설치 방법


**Mac**

```sh
$ npm install -g yarn
yarn create-react-app my-app
cd my-app
yarn start
```

**Window**

```sh
$ npm install -g yarn
yarn create-react-app my-app
cd my-app
yarn start
```
----
