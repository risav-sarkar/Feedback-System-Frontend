const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        institute: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        institute: action.payload.institute,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        institute: null,
        isFetching: false,
        error: action.payload,
      };

    case "UPDATE_USER":
      return {
        user: action.payload.user,
        institute: action.payload.institute,
        isFetching: false,
        error: false,
      };

    case "UPDATE_INSTITUTE":
      return {
        user: action.payload.user,
        institute: action.payload.institute,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
