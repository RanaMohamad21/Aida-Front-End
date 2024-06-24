import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../Customer/UserContext';
import { useVendor } from '../Vendor/VendorContext';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [newShippmentProducts, setNewShippmentProducts] = useState([]);
  const [onSaleProducts, setOnSaleProducts] = useState([]);
  const [underPriceProducts, setUnderPriceProducts] = useState([]);
  
  const { user } = useUser();
  const { vendor } = useVendor();

  useEffect(() => {
    const fetchProducts = async () => {
      const allProductsData = await fetchAllProducts();
      setAllProducts(allProductsData);
      
      const newShippmentData = await fetchNewShippmentProducts();
      setNewShippmentProducts(newShippmentData);

      if (user) {
        const recommendedProductsData = await fetchRecommendedProducts();
        setRecommendedProducts(recommendedProductsData);

        const onSaleProductsData = await fetchOnSaleProducts();
        setOnSaleProducts(onSaleProductsData);

        const underPriceProductsData = await fetchUnderPriceProducts();
        setUnderPriceProducts(underPriceProductsData);
      }
    };

    fetchProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/product');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching all products:', error);
      return [];
    }
  };

  const fetchRecommendedProducts = async () => {
    try {
      const response = await axios.get('');
      return response.data;
    } catch (error) {
      console.error('Error fetching recommended products:', error);
      return [];
    }
  };

  const fetchNewShippmentProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/product/latest/1');
      return response.data;
    } catch (error) {
      console.error('Error fetching new shipment products:', error);
      return [];
    }
  };

  const fetchOnSaleProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/product/on-sale/1');
      return response.data;
    } catch (error) {
      console.error('Error fetching on sale products:', error);
      return [];
    }
  };

  const fetchUnderPriceProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/product/price-under/1');
      return response.data;
    } catch (error) {
      console.error('Error fetching products under price:', error);
      return [];
    }
  };

  return (
    <ProductContext.Provider value={{ allProducts, recommendedProducts, newShippmentProducts, onSaleProducts, underPriceProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
