import SignInForm from "../signIn/SignIn.component";
import SignUpForm from "../signUp/Signup.component";

import './authentication.styles.scss';
const Authentiaction = () => {

  return (
    <div>
      <div className="authentication-container">
        <SignInForm/>
        <SignUpForm/>
      </div>
    </div>
    
  );
};

export default Authentiaction;