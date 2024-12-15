import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password) ;
    } 

    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser) ;
            console.log("current User", currentUser);
            setLoading(false) ;
        }) ; 
    
        return () => { 
            unsubscribe(); 
        };

    } , [])


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        logInUser ,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.func
}
export default AuthProvider;