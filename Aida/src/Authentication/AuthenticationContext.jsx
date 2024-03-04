import { useContext, useReducer, useState } from "react";
import { createContext } from "react";

const AuthenticationContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  name: "Rana",
  email: "Rana@trial.com",
  password: "Rana",
  avatar: "link",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      // state is kept here to set acout type [customuer/vendor]
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}
// eslint-disable-next-line react/prop-types
function AuthenticationProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [error, setError] = useState("");
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
    else {
        setError("Incorrect credentials!")
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthenticationContext.Provider
      value={{ user, isAuthenticated, login, logout, error }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === undefined)
    throw new Error(
      "AuthenticationContext was used outside AuthenticationProvider"
    );
  return context;
}

export { useAuthentication, AuthenticationProvider };
