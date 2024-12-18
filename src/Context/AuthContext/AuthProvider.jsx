import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = provider => {
        setLoading(true) ;
        return signInWithPopup(auth, provider) ;
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log("current User", currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };

    }, [])

    const logOut = () => {
        setLoading(true)
        signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        logInUser,
        googleLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.array
}
export default AuthProvider;