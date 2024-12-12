import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useContext } from "react";
import { GlobolContext } from "../context/GlobolContext";

export const useSiginup = () => {
  const { dispatch } = useContext(GlobolContext);
  const provider = new GoogleAuthProvider();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { signUpWithGoogle };
};
