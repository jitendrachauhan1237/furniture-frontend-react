import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebase.config";

const storeJsonDataInFirestore = async (jsonData) => {
  try {
    const collectionRef = collection(db, "ProductsCollection"); 

    for (const item of jsonData) {
      
      if (!item._id) {
        console.error("Item is missing _id: ", item);
        continue; 
      } 

      const docRef = doc(collectionRef, item._id);
      await setDoc(docRef, item);
       console.log(`Document ${item._id} successfully stored!`); 
    }

     console.log("All data successfully stored in Firestore!");
  } catch (error) {
    console.error("Error storing data in Firestore: ", error); 
  } 
}; 

export default storeJsonDataInFirestore;
