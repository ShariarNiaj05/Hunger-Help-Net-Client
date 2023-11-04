import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()

const AuthProviders = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }




    const authInfo = {
        user,
        loading,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;