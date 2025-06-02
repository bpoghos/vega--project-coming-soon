import React, { createContext, useState, ReactNode, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebase/firebase";

interface VegaDataContextProps {
  data: any; // Replace `any` with the appropriate type for your data
  setData: React.Dispatch<React.SetStateAction<any>>; // Replace `any` with the appropriate type
  fetchData: () => Promise<void>; // Method to fetch data from Firebase
}

export const VegaDataContext = createContext<VegaDataContextProps | undefined>(undefined);

export const VegaDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(null); // Replace `any` with your initial data type

  // Method to fetch data from Firebase
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "vegaData")); // Ensure "vegaData" matches your Firestore collection name
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  // Optionally fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);



  return (
    <VegaDataContext.Provider value={{ data, setData, fetchData }}>
      {children}
    </VegaDataContext.Provider>
  );
};
