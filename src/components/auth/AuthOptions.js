import React from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function AuthOptions(){
    const history = useHistory();
    const register=()=> history.push("/register");
    const login=()=> history.push("/login");
    return(
        <div className="auth-options">
         <button onClick={register}>Register</button>
         <Link to="/register" className="ui button">Sign up</Link>
         <button onClick={login}>Log in</button>
        </div>
    );
}