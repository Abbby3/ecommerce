import { createContext, useContext, useEffect, useState } from "react";
import { pullColl } from "../services/database";

// context for the data pulled from firestore
const DataContext = createContext({});
export const useDataContext = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await pullColl("items");
        setData(fetchedData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
