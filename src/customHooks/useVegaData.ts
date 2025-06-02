import { useContext } from "react";
import { VegaDataContext } from "../context/vegaDataContext";


export const useVegaData = () => {
    const context = useContext(VegaDataContext);
    if (!context) {
      throw new Error("useVegaData must be used within a VegaDataProvider");
    }
    return context;
  };