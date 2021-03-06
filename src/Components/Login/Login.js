import React from 'react';
import Auth from './useAuth';
import './Login.css'; 

const Login = () => {
    const auth = Auth();
    console.log(auth);
    const handleSignIn = () =>{
        auth.signInWithGoogle()
        .then(res=>{
           window.location.pathname = "/review";
        })
    }
    const handleSignOut = () =>{
        auth.signOut()
        .then (res=>{
            window.location.pathname = "/";
        })
    }
    return (
        <div className="login-page">
            <h2>Please login</h2>
            {
                auth.user? <button onClick={handleSignOut}> Sign Out </button>:
                <button onClick={handleSignIn}>Sign in with Google</button>
            }
        </div>
    );
};

export default Login;