import { combineReducers, createStore } from "redux";
import { currentUserReducer , initialCurrentUser } from "../features/currentUser/currentUserSlice";
import { todosReducer , initialtodos } from "../features/todos/todosSlice";


export const store = createStore(
  combineReducers({
    currentUser: currentUserReducer,
    todos:todosReducer,
  }),
  {
    currentUser:initialCurrentUser,
    todos: initialtodos,
  }
);
