import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../../Components/Firebase/Firebase.Config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState("");
   const [loading, setLoading] = useState(false);

   const handleCreateUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
   };

   const handleUserLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const handleGoogleSingIn = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   }

   const handleUserLogOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const updateUser = (profile) => {
      updateProfile(auth.currentUser, profile)
   }

   const emailVerify = () => {
      sendEmailVerification(auth.currentUser);
   }

   const resendEmailPassword = (email) => {
      return resendEmailPassword(auth, email);
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser => {
         console.log("user corrent", currentUser)
         setUser(currentUser);
         setLoading(true);
      }))
      return () => {
         unsubscribe()
      }
   },[])

   const authValue = {
      user,
      handleCreateUser,
      handleUserLogin,
      handleGoogleSingIn,
      handleUserLogOut,
      emailVerify,
      resendEmailPassword,
      updateUser,
      loading,
   };
   return (
      <AuthContext.Provider value={authValue}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;