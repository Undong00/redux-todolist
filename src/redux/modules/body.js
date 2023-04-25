const SET_BODY = "SET_BODY"; // 휴먼 에러 줄일려고
const RESET_BODY = "RESET_BODY";

const initialState = "";

export const setbody = (value) => {
  // e에는 다양한 값이 있음
  // action
  return { type: SET_BODY, payload: value };
};

export const resetbody = () => {
  return { type: RESET_BODY };
};

export const reducer_body = (state = initialState, action) => {
  switch (action.type) {
    case SET_BODY:
      return action.payload;
    case RESET_BODY:
      return initialState;
    default:
      return state;
  }
};

export default reducer_body;
