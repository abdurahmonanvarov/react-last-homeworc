import { toast } from "react-toastify";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

export const useSiginOut = () => {
  const signOutm = () => {
    signOut(auth)
      .then(() => {
        toast.success("Login out success :)");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return { signOutm };
};
