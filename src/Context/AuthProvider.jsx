import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase.init';
const AuthProvider = ({children}) => {

    const createUser = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd);
    }
    const userInfo = {
        email: 'pot@alu.com'
    }
    return (
       <AuthContext value={userInfo}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;