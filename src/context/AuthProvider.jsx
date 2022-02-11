//import pakages
import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// import files
export const authContext = createContext(); 

const AuthProvider = ({children}) => {
    return ( 
        <authContext.Provider value={useFirebase()}>
            {children}
        </authContext.Provider>
     );
}
 
export default AuthProvider;