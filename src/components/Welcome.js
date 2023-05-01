import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome" id="welcome">
      <h2>Welcome to Baketi Chat.</h2>
      <img className="mainlogo" src="https://i.natgeofe.com/k/3e5aee28-56fa-4cd1-8383-7c264aa13117/ww-hearts-nature-swans_4x3.jpg" alt="ReactJs logo"  />
      <p>Sign in with Google to chat with biggest Baketies</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
