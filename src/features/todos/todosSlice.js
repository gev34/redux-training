export const todosReducer = (state = [], action) => {
  if (action.type === "change-todo") {
    return {
      ...state,
        id: action.payload.id,
    };
  }
  return state;
};

export const initialtodos = [
  { 
    id: Math.random(), 
    text: "todo", 
    isCompleted: false 
  },
];
