import { db } from "../config/firebase";
import { collection, getDocs, getDoc, updateDoc, doc } from "firebase/firestore";

export const pullColl = async (coll) => {
  const collectionRef = collection(db, coll);
  const snapshot = await getDocs(collectionRef);
  const result = {};
  snapshot.forEach((doc) => {
    result[doc.id] = doc.data();
  });
  return result;
};

export const checkItem = async (itemID, page) => {
  const docRef = doc(db, "users", "user1");
  const snapshot = await getDoc(docRef);
  const pageArr = snapshot.data()[page];
  return pageArr.includes(itemID) ? true : false;
};

export const pushItem = async (itemID, page) => {
  const docRef = doc(db, "users", "user1");
  const snapshot = await getDoc(docRef);
  const pageArr = snapshot.data()[page];

  const newArr = pageArr.includes(itemID)
    ? pageArr.filter((id) => id !== itemID)
    : [...pageArr, itemID];

  await updateDoc(doc(db, "users", "user1"), {
    [page]: newArr,
  });
};
