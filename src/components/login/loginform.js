import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () => {



    return (
        <div className="cover">
            <h1 className="h1">FIGUSWAP</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn">Login</div>

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