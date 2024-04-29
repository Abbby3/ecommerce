// // for adding items to firestore

// import { db } from "../config/firebase";
// import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";

// export const pullData = async (collectionName, data) => {
//   try {
//     const collectionRef = collection(db, collectionName);
//     const snapshot = await getDocs(collectionRef);

//     Object.keys(data).forEach((key) => delete data[key]);
//     snapshot.forEach((doc) => {
//       data[doc.id] = doc.data();
//     });

//     console.log(`successfully pulled data from ${collectionName}`);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const pushData = async (data, collectionName) => {
//   try {
//     const collectionRef = collection(db, collectionName);
//     const snapshot = await getDocs(collectionRef);

//     snapshot.forEach(async (doc) => {
//       const docId = doc.id;
//       if (!data.hasOwnProperty(docId)) {
//         await deleteDoc(doc.ref);
//       }
//     });

//     for (const itemId in data) {
//       const docRef = doc(collectionRef, itemId);
//       await setDoc(docRef, data[itemId], { merge: false });
//     }

//     console.log(`successfully pushed data to ${collectionName}`);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
