import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo = {
        email: 'pot@alu.com'
    }
    return (
       <AuthContext.Provider value={userInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;