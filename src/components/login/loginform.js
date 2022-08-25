// import React, { useState } from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./loginform.css"



const LoginForm = () => {

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/homepage");
    }

    // const { Client } = require('pg')
    // const pool = new Client({
    //     user: 'postgres',
    //     password: '12345678',
    //     host: 'localhost',
    //     port: 5432,
    //     database: 'postgres'
    // })

    

    return (
        <div className="cover">
            <h1 className="h1">FIGUSWAP</h1>
            <input type="text" className="username" placeholder="username" />
            <input type="password" className="password" placeholder="password" />

            <div className="login-btn" onClick={() => routeChange()}>Login</div>

            {/* <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div> */}

            <div className="signup">Not registered? Signup</div>

            

        </div>
    )    
}

export default LoginForm