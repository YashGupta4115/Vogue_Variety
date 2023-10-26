import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../routes/utils/firebase/firebase.utils";
import SignUpForm from "../signUp/Signup.component";


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;