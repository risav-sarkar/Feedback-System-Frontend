import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("userFeedBackSystem")) || null,
  institute:
    JSON.parse(localStorage.getItem("instituteFeedBackSystem")) || null,
  isFetching: false,
  error: false,
};
// const INITIAL_STATE = {
//   user: { name: "Risav Sarkar" },
//   type: 0,
//   isFetching: false,
//   error: false,
// };
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("userFeedBackSystem", JSON.stringify(state.user));
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem(
      "instituteFeedBackSystem",
      JSON.stringify(state.institute)
    );
  }, [state.institute]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        institute: state.institute,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
