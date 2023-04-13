import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginApi = async (email, password) => {
  console.log(email, password);
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const RegisterApi = async (email, password) => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (e) {
    return e;
  }
};
