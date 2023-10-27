import { useState,useContext } from "react";
import { signInWithGooglePopup , createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../../routes/utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import '../signIn/sign-in-form.styles.scss';
import { UserContext } from "../contexts/user.context";

const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = ()=> {

    const [ formFields , setFormFields ] = useState(defaultFormFields);
    const { email,password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = ()=> {
            setFormFields(defaultFormFields);
    }
    const SignInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user);
        await createUserDocumentFromAuth(user);
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();

        try{
            const { user } = signInAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            resetFormFields();
        }catch(error){
            if(error.code == 'auth/user-not-found'){
                alert('User not found! SignUp instead!')
            }
            if(error.code == 'auth/wrong-password'){
                alert("Wrong password for used email!");
            }
            console.log(error);
        }
    }

    const handleChange = (event)=> {
        const { name,value } = event.target;
        setFormFields({...formFields, [name]:value})
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account ? Sign Up!</h2>
            <span>Sign In with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='E-mail' type="email" required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}/>
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType = 'google' type='button' onClick={SignInWithGoogle}>Google Sign In</Button>
                </div>
                </form>
            
        </div>
    )
}

export default SignInForm;