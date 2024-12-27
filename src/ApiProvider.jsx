import React, { createContext, useEffect, useState } from "react";

// Create Context
const ApiContext = createContext();

// Create Provider Component
const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch API Data
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result); // Store API data in state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
