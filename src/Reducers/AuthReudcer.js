const initialState = {
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
    case "SIGN_IN":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
