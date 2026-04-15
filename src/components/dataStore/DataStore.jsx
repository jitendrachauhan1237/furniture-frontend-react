
import React from "react";
import { useEffect } from "react";
import storeJsonDataInFirestore from "./DataJson"; 

const DataUploader = () => {
  useEffect(() => {
    // Fetch the JSON data from the 'public' folder
    fetch("/Product.json")
      .then((response) => response.json())
      .then((data) => {
        //  console.log("Fetched JSON Data: ", data);  // Check if the data is fetched correctly
        storeJsonDataInFirestore(data);  // Call the function to store the data in Firestore
      })
      .catch((error) => console.error("Error fetching JSON data: ", error));
  }, []);

  return null;  // This component doesn't render anything
};

export default DataUploader;
