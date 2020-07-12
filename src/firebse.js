import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuR5Old41fkgmCCerigyF_r9MSKe1WjPc",
  authDomain: "react-e28c7.firebaseapp.com",
  databaseURL: "https://react-e28c7.firebaseio.com",
  projectId: "react-e28c7",
  storageBucket: "react-e28c7.appspot.com",
  messagingSenderId: "308038111464",
  appId: "1:308038111464:web:d7002883e3bf94a499f95d",
};

firebase.initializeApp(firebaseConfig); //firebase init---------mandatory
export default firebase;
