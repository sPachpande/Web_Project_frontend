import React,{useState,useeffect} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login  from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/Layout/Header';
import "./style.css";
import UserContext from "./context/UserContext";

function App(){
    const {userData,setUserData} =useState({
        token:undefined,
        user:undefined,
    });
    return(
        <BrowserRouter>
        <UserContext.Provider value={{userData,setUserData}}>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;