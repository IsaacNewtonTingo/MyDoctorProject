import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";
//import firestore from "@react-native-firebase/firestore"

import AsyncStorage from "@react-native-async-storage/async-storage";

export async function registration(
  email,
  password,
  firstName,
  firstNextOfKin,
  secondNextOfKin
) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      firstName: firstName,
      firstNextOfKin: firstNextOfKin,
      secondNextOfKin: secondNextOfKin,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

// export function profileUpdate(firstName, firstNextOfKin, secondNextOfKin) {
//   try {
//     await firebase.auth();
//     const currentUser = firebase.auth().currentUser;

//     const db = firebase.firestore();
//     db.collection(" users").doc(currentUser.uid).set({
//       firstName: firstName,
//       firstNextOfKin: firstNextOfKin,
//       secondNextOfKin: secondNextOfKin,
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// }

export function hospitalRecords(
  hospitalName,
  county,
  hospitalDate,
  currentUserUID
) {
  try {
    const currentUser = firebase.auth().currentUser;
    firebase.firestore().collection("Hospitals_Visited").add({
      Hospital_Name: hospitalName,
      Date_Visited: hospitalDate,
      County: county,
      User: currentUserUID,
    });
    // .then((snapshot) => {
    //   hospitalName.id = snapshot.id;
    //   snapshot.set(hospitalName);
    // });
  } catch (err) {
    console.log(err.message);
  }
}

export function ambulanceRecords(
  registrationNumber,
  ambulanceName,
  ambulanceDate,
  currentUserUID,
  county
) {
  try {
    const currentUser = firebase.auth().currentUser;
    firebase.firestore().collection("Ambulance_Services_Used").add({
      Ambulance_Service_Name: ambulanceName,
      Date_Used: ambulanceDate,
      County: county,
      User: currentUserUID,
      Vehicle_registration_Number: registrationNumber,
    });
    // .then((snapshot) => {
    //   hospitalName.id = snapshot.id;
    //   snapshot.set(hospitalName);
    // });
  } catch (err) {
    console.log(err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
