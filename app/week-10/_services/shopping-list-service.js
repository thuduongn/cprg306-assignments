import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const itemsRef = collection(db, "users", userId, "items");
    const snapshot = await getDocs(itemsRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      quantity: doc.data().quantity,
      category: doc.data().category,
    }));
  };
  
  
export const addItem = async (userId, item) => {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, {
      name: item.name,
      quantity: item.quantity,
      category: item.category,
    });
    return { id: docRef.id, ...item };
  };
  
  