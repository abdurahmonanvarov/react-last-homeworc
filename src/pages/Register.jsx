import { useSiginup } from "../hucs/useSignUp";

function Register() {
  const { signUpWithGoogle } = useSiginup();
  return (
    <div className="h-screen grid place-items-center">
      <button onClick={signUpWithGoogle} className="btn btn-primary ">
        Google
      </button>
    </div>
  );
}

export default Register;
