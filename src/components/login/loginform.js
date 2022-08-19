// import React, { useState } from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';
// import Home from '../homepage/home';
import { useNavigate } from "react-router-dom";
import "./loginform.css"




const LoginForm = () => {


    const navigate = useNavigate(); 

    const routeChange = () =>{ 
        navigate("/homepage");
    }

    return (
        <div className="cover">
            <h1 className="h1">FIGUSWAP</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={() => routeChange()}>Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            <div className="signup">Not registered? Signup</div>

            

        </div>
    )

    
}

export default LoginForm