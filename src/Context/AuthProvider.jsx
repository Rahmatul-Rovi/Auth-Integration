import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase.init';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd);
    }
    const signInUser = (email, passowrd) => {
        return signInWithEmailAndPassword(auth, email, passowrd);
    }


    // onAuthStateChanged(auth, (currentUser) => {
    //   if(currentUser){
    //     console.log('Has current user:', currentUser);
    //   }
    //   else{
    //     console.log(currentUser);
    //   }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current user is on sate change', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        createUser,
        signInUser 
    }
    return (
       <AuthContext value={userInfo}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;