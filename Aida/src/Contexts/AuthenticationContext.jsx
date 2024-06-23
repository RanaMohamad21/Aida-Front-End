import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Create a new context for authentication state
const AuthenticationContext = createContext();
let token = "";

// Define the initial state for authentication
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Reducer function to handle state changes
function reducer(state, action) {
  switch (action.type) {
    case "login":
      // Update the state with the user type and set isAuthenticated to true
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
  const navigate = useNavigate();
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
      // Send a POST request to the server with the user credentials
      console.log("Form Data Object:", email, password);
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/login",
        {
          email: email,
          password: password,
        }
      );

      // If the request is successful, update the state with the token
      token = response.data.token;
      localStorage.setItem("token", token);

      // Update the state with the user information
      dispatch({ type: "login", payload: response.data.user });

      // Navigate to the home page
      navigate("/");
    } catch (error) {
      console.error("Failed to login:", error);
      setError("Failed to log in. Please check your email and password");
    }
  }

  // Logout function to log out the user
  function logout() {
    dispatch({ type: "logout" });
    // We need to remove token when logged out.
    localStorage.removeItem("token");
    // Navigate to the home page and replace the current entry in the history stack
    navigate("/", { replace: true });
  }

  return (
    /* Provide the user, isAuthenticated, login & logout functions 
    and error properties to the context */
    <AuthenticationContext.Provider
      value={{ user, isAuthenticated, login, logout, error, token }}
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
