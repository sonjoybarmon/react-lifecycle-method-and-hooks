const SIMPLE = "SIMPLE";

const init = {
  isAuthenticated: false,
  user: {},
  error: {},
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case SIMPLE:
      return {
        isAuthenticated: true,
        user: [1, 2, 3],
        error: [1, 2, 3],
      };
    default:
      return init;
  }
};

export default authReducer;
