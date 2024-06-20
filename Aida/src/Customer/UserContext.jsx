import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log("UserProvider mounted");
    const token = localStorage.getItem("token");
    console.log("token", token);
    
    if (token) {
      axios.get("http://localhost:8081/api/v1/customer/info", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setUser(response.data);
        console.log("User data fetched successfully", response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

//export const useUser = () => useContext(UserContext);
export const  useUser = () => {
  return useContext(UserContext);
};
