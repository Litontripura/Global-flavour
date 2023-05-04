import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]=useState(true)
    const google = new GoogleAuthProvider() 
    const gitHubProvider = new GithubAuthProvider()
    

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,google)
    }
    const gitHubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider )
    }
    const LogOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser.user);
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    

    const authInfo ={
        createUser,
        user,
        logIn,
        LogOut,
        gitHubSignIn,
        googleSignIn,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;