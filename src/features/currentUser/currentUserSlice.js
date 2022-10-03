export const currentUserReducer = (state = {}, action) => {
    if (action.type === "change-user-name") {
      return {
        ...state,
          name: action.payload.name,
      };
    }
    return state;
  };

export const initialCurrentUser = {
    name: "Gustav",
  }

export const selectName = (state) => {
    return state.currentUser.name;
  }  

export const editUser = (newName) => {
    return {
        type:"change-user-name",
        payload:{
          name:newName
        }
      }
}
  