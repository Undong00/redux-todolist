const SET_TITLE = "SET_TITLE"; // 휴먼 에러 줄일려고
const RESET_TITLE = "RESET_TITLE";

const initialState = "";

export const settitle = (e) => {
  // action
  return { type: SET_TITLE, payload: e.target.value };
};

export const resettitle = () => {
  return { type: RESET_TITLE };
};

export const reducer_title = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return action.payload;
    case RESET_TITLE:
      return initialState;
    default:
      return state;
  }
};

export default reducer_title;
