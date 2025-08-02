import {auth,provider} from '../config/firebase.js';
import { signInWithPopup } from 'firebase/auth';



export default function GoogleSignupButton (){
    
    
    const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User info:', user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      Sign in with Google
    </button>
  );

  
}
