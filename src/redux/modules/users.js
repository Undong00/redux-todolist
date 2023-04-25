import { v4 as uuidv4 } from "uuid";

// 개꿀팁 아이디
const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";
const COMPLETE_USER = "COMPLETE_USER";
const CANCEL_USER = "CANCEL_USER";
const initialState = [
  { id: uuidv4(), title: "이동언", body: "나는 이동언이다.", isDone: false },
];

export const adduser = (title, body) => {
  return { type: ADD_USER, title, body };
};

export const deleteuser = (id) => {
  return { type: DELETE_USER, payload: id };
};

export const completeuser = (id) => {
  return { type: COMPLETE_USER, payload: id };
};

export const canceluser = (id) => {
  return { type: CANCEL_USER, payload: id };
};

const reducer_user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUsers = {
        id: uuidv4(),
        title: action.title,
        body: action.body,
        isDone: false,
      };

      return [...state, newUsers];

    case DELETE_USER:
      const delUser = state.filter((user) => user.id !== action.payload);
      return delUser;
    case COMPLETE_USER:
      const completeUsers = state.map((user) =>
        user.id === action.payload ? { ...user, isDone: true } : user
      );
      return completeUsers;
    case CANCEL_USER:
      const cancelUsers = state.map((user) =>
        user.id === action.payload ? { ...user, isDone: false } : user
      );
      return cancelUsers;
    default:
      return state;
  }
};

export default reducer_user;
