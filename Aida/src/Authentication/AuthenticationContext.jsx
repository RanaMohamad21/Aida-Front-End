import { useContext, useReducer, useState } from "react";
import { createContext } from "react";

// Create a new context for authentication state
const AuthenticationContext = createContext();

// Define the initial state for authentication
const initialState = {
  user: null,
  isAuthenticated: false,
};

// A fake user for testing purposes
const FAKE_USER = {
  name: "Rana",
  email: "Rana@trial.com",
  password: "Rana",
  avatar: "link",
};

// Reducer function to handle state changes
function reducer(state, action) {
  switch (action.type) {
    case "login":
      // Update the state with the user type  and set isAuthenticated to true
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      // Reset the state to the initial state
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}
// AuthenticationProvider component
// eslint-disable-next-line react/prop-types
function AuthenticationProvider({ children }) {
  // Use the reducer to manage state
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Use state to manage error messages
  const [error, setError] = useState("");

  //TODO: Check the user type [Customer/Vendor]
  // Login function to authenticate a user
  // Validate email and password
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  // Login function with email and password validation
  async function login(email, password) {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        "Please enter a valid password. It should be at least 8 characters long"
      );
      return;
    }

    setError("");

    try {
      // Authenticate user
      // const response = await api.login(email, password);
      // dispatch({ type: "login", payload: response.data });

      // For testing purposes, we will just log in with the fake user
      dispatch({ type: "login", payload: FAKE_USER });
    } catch (error) {
      console.error("Failed to login:", error);
      setError("Failed to log in. Please check your email and password");
    }
  }
  // Logout function to log out the user
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    /* Provide the user, isAuthenticated, login & logout functions 
    and error properties to the context */

    <AuthenticationContext.Provider
      value={{ user, isAuthenticated, login, logout, error }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

// Custom hook to use the AuthenticationContext
function useAuthentication() {
  // Get the context
  const context = useContext(AuthenticationContext);

  // If the context is not available, throw an error
  if (context === undefined)
    throw new Error(
      "AuthenticationContext was used outside AuthenticationProvider"
    );

  // Else return the context
  return context;
}

// Export the custom hook and the AuthenticationProvider component
export { useAuthentication, AuthenticationProvider };
