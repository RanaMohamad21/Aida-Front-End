import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [vendor, setVendor] = useState('');


  useEffect(() => {
    
    const token = localStorage.getItem("token");
    
    if (token) {
      axios.get("http://localhost:8081/api/v1/vendor/info", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setVendor(response.data);
        console.log("Vendor data fetched successfully", response.data);
      })
      .catch(error => {
        console.error("Error fetching vendor data:", error);
      });
    }
  }, []);

  return (
    <VendorContext.Provider value={{ vendor, setVendor }}>
      {children}
    </VendorContext.Provider>
  );
};

//export const useUser = () => useContext(UserContext);
export const  useVendor = () => {
  return useContext(VendorContext);
};
