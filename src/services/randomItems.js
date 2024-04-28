import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const randomItems = async (num, term) => {
  const itemCollectionRef = collection(db, "items");
  const items = [];
  try {
    const snapshot = await getDocs(itemCollectionRef);

    snapshot.forEach((doc) => {
      if (term !== undefined) {
        if (doc.data()[term]) {
          items.push(doc.id);
        }
      } else {
        items.push(doc.id);
      }
    });
    items.sort(() => Math.random() - 0.5);

    return items.slice(0, num);
  } catch (e) {
    console.error(e);
    return [];
  }
};
