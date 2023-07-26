// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {toast} from "react-toastify"
import { collection, doc, getDocs, getFirestore, increment, query, setDoc, updateDoc, where } from "firebase/firestore";
import { UserProps } from "types";
import { nanoid } from "nanoid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDyPxIwtJ1tTPLYBFH9d05S2G_Uce_DyyM",
    authDomain: "scientific-crow-365013.firebaseapp.com",
    projectId: "scientific-crow-365013",
    storageBucket: "scientific-crow-365013.appspot.com",
    messagingSenderId: "551300805004",
    appId: "1:551300805004:web:18a13d68d9b9b4672a66a9",
    measurementId: "G-2BFT6GC8P8"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export const createUser = async (data: UserProps, code?: string) => {
  try {
    const referralCode = nanoid(10)
    const res = await setDoc(doc(db, "blowxUsers", data.walletAddress), { referrals: 0 ,...data, referralCode } as UserProps)
    if(code) await updateUserReferral(code)
    console.log(res);
    return { referralCode, success: true }
  } catch (error: any) {
    console.log(error.message)
    toast.error(error.message)
    return null
  }
  
} 

export const updateUserReferral = async (code: string) => {
    try {
        const q =  query(collection(db, "blowxUsers"), where("referralCode", "==", code));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
            querySnapshot.forEach(async (docs) => {
            // doc.data() is never undefined for query doc snapshots
            const userRef = doc(db, "blowxUsers", docs.id);
                    // Atomically increment the population of the city by 50.
                    await updateDoc(userRef, {
                    referrals: increment(1)
                });

            })
    } catch (error: any) {
        console.log(error);
        
    }
}


// Add a new document with a generated id.
// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });
// console.log("Document written with ID: ", docRef.id);
// or
// await setDoc(doc(db, "cities", "new-city-id"), data);




// Create an initial document to update.
// const frankDocRef = doc(db, "users", "frank");
// await setDoc(frankDocRef, {
//     name: "Frank",
//     favorites: { food: "Pizza", color: "Blue", subject: "recess" },
//     age: 12
// });

// To update age and favorite color:
// await updateDoc(frankDocRef, {
//     "age": 13,
//     "favorites.color": "Red"
// });