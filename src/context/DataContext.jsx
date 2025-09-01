import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  // ✅ initialize as [] so .map() is always safe
  const [data, setData] = useState([]);

  // fetching all products from api
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.in/api/products"
      );
      console.log(res.data);

      // ✅ handle both possible response shapes
      const productsData = res.data.products || res.data;

      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  // ✅ will now return at least ["All"] safely
  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");

  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
