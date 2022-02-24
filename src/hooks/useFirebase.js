import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import initializeAuthentication from "../firebase/firebase.init";
import {useNavigate} from 'react-router-dom';

initializeAuthentication();
const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [error, setError] = useState("")
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const redirectUrl = location?.state?.from || '/';

    const googleprovider = new GoogleAuthProvider();

    const auth = getAuth();
    const createSingInWithEmail = () =>{
        // e.preventDefault();    
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUserDetails();
            setUser(res.user);
            navigate(redirectUrl)
            setError("")
            saveUser(email, name, "POST")

        })
        .catch((error) => {
            setError(error.message);
            console.log(error.message)
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        setLoading(false)
        });
    },[])

    const signInWithEmail = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setUser(res.user);
            navigate(redirectUrl)
            setError("")
        })
        .catch((error) => {
            setError(error.message);
        });

    }

    const googleSignIn = () => {
    setLoading(true);

    signInWithPopup(auth, googleprovider)
      .then((result) => {
        setUser(result.user);
        saveUser(result.user.email, result.user.displayName, "PUT")
        navigate(redirectUrl);

      })
      .finally(() => setLoading(false));
    };
    
    const setUserDetails = () => {
            updateProfile(auth.currentUser, { displayName: name })
                .then(result => {
                    setUser(result.user)
                    setError("")
                })
                .catch(error => {
                    setError(error.message);
                })
        }

  // this is a auth observer with observe all changes for the user

    const logout = () =>{
        signOut(auth).then(() => {
            setUser({});
            setError("");
        })
        .finally(() => setLoading(false))
    }



    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        let isAdmin = false;
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if(data?.admin === true){
                    isAdmin = true
                }
                setAdmin(isAdmin);
            });
    }, [user.email])



    return {
        user,
        createSingInWithEmail,
        setEmail,
        setPassword,
        password,
        signInWithEmail,
        logout,
        loading,
        googleSignIn,
        admin,
        setAdmin,
        error,
        setError, 
        setName,
        setUserDetails
    };
}

export default useFirebase;